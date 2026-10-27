import { email } from "zod";
import { create } from "zustand";


const API = "https://localheroes.vercel.app";

export const useAuthStore = create((set, get) => ({

    token: localStorage.getItem("token") || null,
    user: null,
    status: "idle" , // "idle" | "loading" | "error"
    error: "", 


    


//  Signing Up New User ----------


   Signup:  async (name, email, password) => {
     console.log(name,email,password, "Test111")
    set({status: "loading", error: ""});

    try {
        const res = await fetch(`${API}/api/auth/register`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
               name,
                email ,
                password 
            })
        })

        const data = await res.json();
        
        if(!res.ok) {
            throw new Error(data.message || "SignUp Failed")
        }

        const token = data.accessToken || data.token;

        if (token) {
            localStorage.setItem("token", token)
            set({token, user: data, status: "idle", error: ""})

        } else {
            set({status: "idle", error: ""})

        }

        return true

        

    } catch(err) {
        set({status: "error", error: err.message})
    }
    
   },













// Login User ----------


    LogIn: async(email, password) => { 

        set({status: "loading", error: ""})

        try {
            const res = await fetch(`${API}/api/auth/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})

            })

            const data = await res.json()

            if (!res.ok) throw new Error("Wrong Username or Password")

            const token = data.accessToken || data.token
            localStorage.setItem("token", token)

            set({token, user: data, status: "idle"})

            return true
        } catch(err) {
            set({status: "error", error: err.message})
            return false
        }
    },




// fetch the User data-----


fetchMe: async() => {

    const token = get() .token
    if (!token) return 

    try {
        const res = await fetch(`${API}/auth/me`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        if (!res.ok) throw new Error("Session Expired")
        set({user: await res.json })

    } catch(err) {
        set({status: "error", error: err.message})
    }
},


// LogOut The User --------


logOut: async() => {
   

   set({status: "loading", error: ""})
   const token = get().token
   if (!token) return 

    try {
        const response = await fetch(`${API}/api/auth/logout`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          
          body: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

    
        if (response.ok) {
          // Remove token from client storage
          localStorage.removeItem("token");
          // Redirect to login page
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Logout error:", error);
      }
    


},

CreateHero: async (full_name, story, location, tags, photo_url) => {
    
    const token = get() .token
    if (!token) return 
    
    set({ status: "loading", error: "" });
  
    try {
      const response = await fetch(`${API}/api/heroes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            "full_name": full_name,
            "story": story,
            "location": location,
            "tags": tags,
            "photo_url": photo_url
        }),
      });
      
  
      const data = await response.json().catch(() => ({}));
      console.log(data, "datareport")
  
      if (!response.ok) {
        throw new Error(data.message || data.detail || `Registration failed (${response.status})`);
      }
  
      set({ status: "success", error: "", user: data });
      return data;
    } catch (err) {
        console.log(err, "erorr")
      set({ status: "error", error: err.message });
      return null;
    }
  },

// Register or Nominate Hero

// register: async() => {
//     console.log("1111111")

//     set({status: "loading", error: ""})
   
//     try {
//         const response = await fetch(`${API}/api/auth/register`, {
//             method: "POST",
            
//            headers:{

                
//                     "full_name": "string",
//                     "story": "string",
//                     "location": "string",
//                     "tags": ["string"],
//                     "photo_url": "string"
                
                  
//             },
        
//         })
       

            
//     } catch (error) {
//         set({status: "error", error: err.message})
       

//     }

// }










}))