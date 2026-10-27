import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "./NominationForm.css";
import { useAuthStore } from "../store/useAuthStore";
import {  useNavigate } from "react-router-dom";

const maxTags = 5;
const minDesc = 100;
const minSTORY = 10;
const photoSize = 15;

const LOCATIONS = [
  "Amsterdam",
  "London",
  "Paris",
  "New York",
  "Mogadishu",
  "Other",
];
const IMPACT_AREAS = [
  "Education",
  "Environment",
  "Health",
  "Community",
  "Technology",
  "Arts & Culture",
];

const heroesSchema = z.object({
  // Page 1
  name: z.string().trim().min(1, "Please fill in the name."),
  location: z.string().min(1, "Please choose a location."),
  impactArea: z.string().min(1, "Please choose an impact area."),
  // Page 2
  shortDescription: z
    .string()
    .trim()
    .min(1, "Please write a short description.")
    .max(minDesc, `Keep it under ${minDesc} characters.`),
  impactStory: z
    .string()
    .trim()
    .min(minSTORY, `The impact story must be at least ${minSTORY} characters.`),
});

// const EMPTY_FORM = {
//   fullname: "",
//   tags: [],
//   location: "",
//   story: "",
//   photo: "",
// };

function NominationForm() {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(heroesSchema),
   
  });
  const [shortDescription, setShortDescption] = useState ("")
  const [impactStory, setImpactStory] = useState("")
  const [fullname,setFullName] = useState("")
  const [location, setLocation] = useState("")
  const [story, setStory] = useState("")
  const [photo, setPhoto] = useState("")
  const [tagInput, setTagInput] = useState("")
  const [tags, setTags] = useState([]);
  const [tagError, setTagError] = useState("")
  const [photoPreview, setPhotoPreview] = useState("")
  const [photoError, setPhotoError] = useState("")
  const nominate = useAuthStore((state) => state.CreateHero)
  const navigate = useNavigate();
  

  function addTag() {
    const newTag = tagInput.trim();

    if (newTag === "") {
      return;
    }
    if (tags.length >= maxTags) {
      setTagError(`You can add up to ${maxTags} tags.`);
      return;
    }
    if (tags.includes(newTag)) {
      setTagError("That tag is already added.");
      return;
    }

    setTags([...tags, newTag]);
    setTagInput("");
    setTagError("");
  }

  function handleTagKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  }

  function removeTag(tagToRemove) {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  }

  function handlePhotoChange(e) {
    const file = e.target.files[0];

    if (!file) {
      return;
    }
    if (!file.type.startsWith("image/")) {
      setPhotoError("Please choose an image file.");
      return;
    }
    if (file.size > photoSize * 1024 * 1024) {
      setPhotoError(`Photo must be smaller than ${photoSize} MB.`);
      return;
    }

    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
    setPhotoError("");
  }
  function removePhoto() {
    setPhoto(null);
    setPhotoPreview("");
  }
  function ReviewItem({ label, value }) {
    return (
      <div className="nf-review-item">
        <span className="nf-review-label">{label}</span>
        <span className="nf-review-value">{value}</span>
      </div>
    );
  }
  const reviewlist = getValues();

  const onSubmit = async (e) => {
    console.log(fullname, story, location, tags, photo, "hhhhh");

    const created = await nominate(fullname, story, location, tags, photo);
    if (created) 
    navigate("/HeroesListingList");
  };

  return (
    <form className="Nomination-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form1">
        <h2 className="nf-title">Who are you nominating?</h2>

        <label className="nf-field">
          Name *
          <input
            className="nf-input"
            placeholder="Full name of the nominee"
            value = {fullname}
            onChange = {e => setFullName(e.target.value)}
            
            
          />
          {errors.fullname && (
            <p className="nf-error">{errors.fullname.message}</p>
          )}
        </label>
        <label className="nf-field">
          Location *
          <select className="nf-input"
           value = {location}
          onChange = {e => setLocation(e.target.value)
            }>
            <option value="">Choose a location</option>
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          {errors.location && (
            <p className="nf-error">{errors.location.message}</p>
          )}
        </label>
        <label className="nf-field">
          Impact area *
          <select className="nf-input"
           value = {story}
            onChange = { e => setStory(e.target.value)
            }>
            <option value="">Choose an impact area</option>
            {IMPACT_AREAS.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          {errors.story && (
            <p className="nf-error">{errors.story.message}</p>
          )}
        </label>
      </div>
      <div className="form2">
        <h2 className="nf-title">Tell their story</h2>

        <label className="nf-field">
          Short description *
          <input
            className="nf-input"
            placeholder="One sentence summary"
            maxLength={minDesc}
            value = {shortDescription}
            onChange={e => setShortDescption(e.target.value)}
          />
          {errors.shortDescription && (
            <p className="nf-error">{errors.shortDescription.message}</p>
          )}
        </label>

        <label className="nf-field">
          Full impact story *
          <textarea
            className="nf-input nf-textarea"
            placeholder="What did they do and what difference did it make?"
            value = {impactStory}
            onChange={e => setImpactStory(e.target.value)}
          />
          {errors.impactStory && (
            <p className="nf-error">{errors.impactStory.message}</p>
          )}
        </label>
        <div className="tags">
          <div className="nf-row">
            <span>Impact tags (optional)</span>
          </div>
          <div className="nf-row">
            <input
              className="nf-input nf-tag-input"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              disabled={tags.length >= maxTags}
            />
            <button
              type="button"
              className="nf-btn nf-btn-secondary"
              onClick={addTag}
            >
              Add
            </button>
          </div>

          <span className="nf-hint">Press Enter or click Add</span>
          {tagError && <p className="nf-error">{tagError}</p>}

          {tags.length > 0 && (
            <div className="nf-tag-list">
              {tags.map((tag) => (
                <span key={tag} className="nf-tag">
                  {tag}
                  <button
                    type="button"
                    className="nf-tag-remove"
                    onClick={() => removeTag(tag)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="form3">
        <h2 className="nf-title">Photo</h2>

        <label className="nf-field">
         photo *
          <input
            className="nf-input"
            placeholder="Photo"
            value = {photo}
            onChange = {e => setPhoto(e.target.value)}
            
            
          />
          {errors.photo && (
            <p className="nf-error">{errors.photo.message}</p>
          )}
        </label>

        {/* {photoPreview ? (
          <div className="nf-preview-box">
            <img src={photoPreview} alt="Nominee" className="nf-preview" />
            <span className="nf-hint">{photo.name}</span>
            <button
              type="button"
              className="nf-btn nf-btn-secondary"
              onClick={removePhoto}
            >
              Remove photo
            </button>
          </div>
        ) : (
          <label className="nf-dropzone">
            <span>Click to upload a photo</span>
            <span className="nf-hint">
              JPG, PNG, GIF or WEBP · max {photoSize} MB
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="nf-hidden"
            />
          </label>
        )} */}
        {/* {photoError && <p className="nf-error">{photoError}</p>} */}

        <h2 className="nf-title nf-review-title">Review your nomination</h2>

        <div className="nf-review-card">
            <div className="nf-review-section">
              <div className="nf-row">
                <strong>Nominee</strong>
                <button type="button" className="nf-link-btn" >Edit</button>
              </div>
              <ReviewItem label="Name" value={reviewlist.name} />
              <ReviewItem label="Location" value={reviewlist.location} />
              <ReviewItem label="Impact area" value={reviewlist.impactArea} />
            </div>
 
            <div className="nf-review-section">
              <div className="nf-row">
                <strong>Story</strong>
                <button type="button" className="nf-link-btn" onClick={() => setStep(2)}>Edit</button>
              </div>
              <ReviewItem label="Short description" value={reviewlist.shortDescription} />
              <ReviewItem label="Full impact story" value={reviewlist.impactStory} />
              <ReviewItem label="Impact tags" value={tags.length > 0 ? tags.join(", ") : "No tags added"} />
            </div>
 
            <div className="nf-review-section">
              <strong>Photo</strong>
              {/* <ReviewItem label="Photo" value={photo ? photo.name : "Not uploaded yet"} /> */}
            </div>
          </div>
      </div>
      <div className="nf-buttons">
        
          <button type="submit" className="nf-btn nf-btn-primary" onClick={onSubmit} >Add hero </button>
        
      </div>
    </form>
  );
}

export default NominationForm;
