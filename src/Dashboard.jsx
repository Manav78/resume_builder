import { useState } from 'react';

// Icons using Lucide-react (using inline SVG for self-containment)
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M12 12h.01"/></svg>
);
const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.832a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16"/><path d="M6 16v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4"/></svg>
);
const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 1 0-1-1.912 5.813L3 12l5.813 1.912a2 2 0 0 1 1.175 1.175L12 21l1.912-5.813a2 2 0 0 1 1.175-1.175L21 12l-5.813-1.912a2 2 0 0 1-1.175-1.175z"/></svg>
);
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const BookMarkedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark-x"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/><path d="m14.5 7.5-5 5"/><path d="m9.5 7.5 5 5"/></svg>
);
const AtSignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-at-sign"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucude-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L13.5 6"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07L10.5 18"/></svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M12 16.5A3.5 3.5 0 0 1 8.5 13a3.5 3.5 0 0 1 7 0A3.5 3.5 0 0 1 12 16.5Z"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"/></svg>
);
const XCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
);
const PrinterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-printer"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
);

// Initial state for the resume data
const initialResumeData = {
  personalInfo: {
    name: 'Jane Doe',
    title: 'Senior Frontend Developer',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'linkedin.com/in/janedoe',
    city: 'San Francisco, CA',
  },
  summary: 'Results-driven Senior Frontend Developer with over 10 years of experience building and maintaining high-performance web applications. Expert in React, JavaScript, and modern web development practices. Proven ability to lead projects from concept to deployment and mentor junior developers.',
  experience: [
    {
      company: 'Tech Innovators Inc.',
      title: 'Senior Frontend Developer',
      startDate: 'Jan 2020',
      endDate: 'Present',
      description: [
        'Led a team of 5 developers in the successful launch of a new e-commerce platform, increasing user engagement by 30%.',
        'Developed and maintained a component library using React and Storybook, reducing development time by 20%.',
        'Optimized application performance, decreasing load times by 40% through code splitting and lazy loading.',
      ],
    },
    {
      company: 'Digital Solutions Co.',
      title: 'Frontend Developer',
      startDate: 'Mar 2015',
      endDate: 'Dec 2019',
      description: [
        'Built and shipped responsive web pages for marketing campaigns, resulting in a 15% increase in lead generation.',
        'Collaborated with UX/UI designers to translate wireframes and mockups into pixel-perfect user interfaces.',
        'Implemented A/B testing to optimize conversion funnels.',
      ],
    },
  ],
  education: [
    {
      school: 'Stanford University',
      degree: 'M.S. in Computer Science',
      year: '2015',
    },
    {
      school: 'University of California, Berkeley',
      degree: 'B.S. in Computer Science',
      year: '2013',
    },
  ],
  skills: [
    'JavaScript (ES6+)',
    'React',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Node.js',
    'Git',
    'Agile Methodologies',
  ],
};

// Component for a single input field
const InputField = ({ label, value, onChange, placeholder, type = 'text', className = '', name }) => (
  <div className={`form-field ${className}`}>
    <label className="form-label">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        className="form-textarea"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    ) : (
      <input
        className="form-input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    )}
  </div>
);

// Component for the resume input form
const ResumeForm = ({ resumeData, setResumeData }) => {
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prevData => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleSummaryChange = (e) => {
    setResumeData(prevData => ({ ...prevData, summary: e.target.value }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...resumeData.experience];
    if (name === 'description') {
      newExperience[index][name] = value.split('\n');
    } else {
      newExperience[index][name] = value;
    }
    setResumeData(prevData => ({ ...prevData, experience: newExperience }));
  };

  const addExperience = () => {
    setResumeData(prevData => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        { company: '', title: '', startDate: '', endDate: '', description: [''] },
      ],
    }));
  };

  const removeExperience = (index) => {
    const newExperience = resumeData.experience.filter((_, i) => i !== index);
    setResumeData(prevData => ({ ...prevData, experience: newExperience }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...resumeData.education];
    newEducation[index][name] = value;
    setResumeData(prevData => ({ ...prevData, education: newEducation }));
  };

  const addEducation = () => {
    setResumeData(prevData => ({
      ...prevData,
      education: [...prevData.education, { school: '', degree: '', year: '' }],
    }));
  };

  const removeEducation = (index) => {
    const newEducation = resumeData.education.filter((_, i) => i !== index);
    setResumeData(prevData => ({ ...prevData, education: newEducation }));
  };

  const handleSkillsChange = (e) => {
    setResumeData(prevData => ({
      ...prevData,
      skills: e.target.value.split(',').map(s => s.trim()),
    }));
  };

  return (
    <div className="form-container">
      {/* Personal Info */}
      <div className="form-section">
        <h2 className="form-section-title"><UserIcon />Personal Information</h2>
        <InputField label="Full Name" name="name" value={resumeData.personalInfo.name} onChange={handlePersonalInfoChange} />
        <InputField label="Title" name="title" value={resumeData.personalInfo.title} onChange={handlePersonalInfoChange} />
        <InputField label="Email" name="email" value={resumeData.personalInfo.email} onChange={handlePersonalInfoChange} />
        <InputField label="Phone" name="phone" value={resumeData.personalInfo.phone} onChange={handlePersonalInfoChange} />
        <InputField label="LinkedIn" name="linkedin" value={resumeData.personalInfo.linkedin} onChange={handlePersonalInfoChange} />
        <InputField label="City, State" name="city" value={resumeData.personalInfo.city} onChange={handlePersonalInfoChange} />
      </div>

      {/* Professional Summary */}
      <div className="form-section">
        <h2 className="form-section-title"><BookMarkedIcon />Professional Summary</h2>
        <InputField label="Summary" name="summary" type="textarea" value={resumeData.summary} onChange={handleSummaryChange} />
      </div>

      {/* Work Experience */}
      <div className="form-section">
        <h2 className="form-section-title"><BriefcaseIcon />Work Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="form-sub-section">
            <h3 className="form-sub-title">Experience #{index + 1}</h3>
            <button
              onClick={() => removeExperience(index)}
              className="remove-button"
            >
              <XCircleIcon />
            </button>
            <InputField label="Company" name="company" value={exp.company} onChange={(e) => handleExperienceChange(index, e)} />
            <InputField label="Job Title" name="title" value={exp.title} onChange={(e) => handleExperienceChange(index, e)} />
            <div className="date-fields">
              <InputField label="Start Date" name="startDate" value={exp.startDate} onChange={(e) => handleExperienceChange(index, e)} />
              <InputField label="End Date" name="endDate" value={exp.endDate} onChange={(e) => handleExperienceChange(index, e)} />
            </div>
            <InputField label="Description (one point per line)" name="description" type="textarea" value={exp.description.join('\n')} onChange={(e) => handleExperienceChange(index, e)} />
          </div>
        ))}
        <button
          onClick={addExperience}
          className="add-button"
        >
          Add Experience
        </button>
      </div>

      {/* Education */}
      <div className="form-section">
        <h2 className="form-section-title"><GraduationCapIcon />Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="form-sub-section">
            <h3 className="form-sub-title">Education #{index + 1}</h3>
            <button
              onClick={() => removeEducation(index)}
              className="remove-button"
            >
              <XCircleIcon />
            </button>
            <InputField label="School" name="school" value={edu.school} onChange={(e) => handleEducationChange(index, e)} />
            <InputField label="Degree" name="degree" value={edu.degree} onChange={(e) => handleEducationChange(index, e)} />
            <InputField label="Year" name="year" value={edu.year} onChange={(e) => handleEducationChange(index, e)} />
          </div>
        ))}
        <button
          onClick={addEducation}
          className="add-button"
        >
          Add Education
        </button>
      </div>

      {/* Skills */}
      <div className="form-section">
        <h2 className="form-section-title"><SparklesIcon />Skills</h2>
        <InputField
          label="Skills (comma separated)"
          name="skills"
          type="textarea"
          value={resumeData.skills.join(', ')}
          onChange={handleSkillsChange}
          placeholder="e.g., JavaScript, React, Tailwind CSS"
        />
      </div>
    </div>
  );
};

// Component to display the resume
const ResumeDisplay = ({ resumeData }) => {
  return (
    <div id="resume-display" className="resume-display-container">
      {/* Header */}
      <div className="resume-header">
        <h1 className="resume-name">{resumeData.personalInfo.name}</h1>
        <p className="resume-title">{resumeData.personalInfo.title}</p>
        <div className="contact-info">
          <div className="contact-item"><AtSignIcon className="icon" />{resumeData.personalInfo.email}</div>
          <div className="contact-item"><PhoneIcon className="icon" />{resumeData.personalInfo.phone}</div>
          <div className="contact-item"><LinkIcon className="icon" /><a href={`https://${resumeData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="link">{resumeData.personalInfo.linkedin}</a></div>
          <div className="contact-item"><MapPinIcon className="icon" />{resumeData.personalInfo.city}</div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="resume-section">
        <h2 className="resume-section-title"><BookMarkedIcon />Summary</h2>
        <p className="resume-summary">{resumeData.summary}</p>
      </div>

      {/* Work Experience */}
      <div className="resume-section">
        <h2 className="resume-section-title"><BriefcaseIcon />Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div>
                <h3 className="experience-company">{exp.company}</h3>
                <p className="experience-job-title">{exp.title}</p>
              </div>
              <p className="experience-dates">{exp.startDate} - {exp.endDate}</p>
            </div>
            <ul className="experience-description">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="resume-section">
        <h2 className="resume-section-title"><GraduationCapIcon />Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <div>
                <h3 className="education-school">{edu.school}</h3>
                <p className="education-degree">{edu.degree}</p>
              </div>
              <p className="education-year">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <h2 className="resume-section-title"><SparklesIcon />Skills</h2>
        <div className="skills-list">
          {resumeData.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  const [resumeData, setResumeData] = useState(initialResumeData);

  // Function to handle printing
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
          
          :root {
            --bg-color-dark: #0f172a;
            --bg-color-mid: #1e293b;
            --bg-color-light: #334155;
            --text-color-primary: #fff;
            --text-color-secondary: #d1d5db;
            --text-color-light: #9ca3af;
            --blue-color: #2563eb;
            --blue-light-color: #60a5fa;
            --purple-color: #7c3aed;
            --pink-color: #db2777;
            --shadow-light: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          
          body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color-dark);
            color: var(--text-color-primary);
            margin: 0;
            padding: 0;
            min-height: 100vh;
          }
          
          .main-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
            transition-property: background-color, color;
            transition-duration: 300ms;
          }
          
          .main-wrapper {
            width: 100%;
            max-width: 80rem;
            margin: auto;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            border-radius: 1.5rem;
            padding: 2rem;
            background-color: var(--bg-color-dark);
            position: relative;
            overflow: hidden;
            z-index: 10;
          }

          .main-wrapper::before {
            content: '';
            position: absolute;
            inset: 0;
            padding: 1px;
            border-radius: 1.5rem;
            background: linear-gradient(to bottom right, var(--blue-color), var(--purple-color), var(--pink-color));
            z-index: -1;
          }
          
          @media (min-width: 1024px) {
            .main-wrapper {
              flex-direction: row;
            }
          }
          
          .app-title {
            font-size: 2.25rem;
            font-weight: 800;
            background: linear-gradient(to right, var(--blue-light-color), #a855f7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 2rem;
          }
          
          .app-description {
            color: var(--text-color-light);
            margin-bottom: 2rem;
          }
          
          .form-section-wrapper {
            width: 100%;
            flex-shrink: 0;
          }
          
          @media (min-width: 1024px) {
            .form-section-wrapper {
              width: 50%;
            }
          }
          
          .preview-section-wrapper {
            width: 100%;
            flex-shrink: 0;
          }
          
          @media (min-width: 1024px) {
            .preview-section-wrapper {
              width: 50%;
            }
          }
          
          .form-container {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            background-color: var(--bg-color-mid);
            border-radius: 0.75rem;
            box-shadow: var(--shadow-light);
            border: 1px solid rgba(59, 130, 246, 0.2);
          }
          
          .form-section {
            background-color: var(--bg-color-mid);
            padding: 1.5rem;
            border-radius: 0.75rem;
            border: 1px solid var(--bg-color-light);
          }
          
          .form-section-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--blue-light-color);
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .form-sub-section {
            margin-bottom: 2rem;
            padding: 1rem;
            border: 1px solid rgba(59, 130, 246, 0.2);
            border-radius: 0.75rem;
            position: relative;
          }
          
          .form-sub-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-color-primary);
            margin-bottom: 1rem;
          }
          
          .form-field {
            margin-bottom: 1rem;
          }
          
          .form-label {
            display: block;
            color: var(--text-color-light);
            font-size: 0.875rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }
          
          .form-input, .form-textarea {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            appearance: none;
            border: 1px solid rgba(59, 130, 246, 0.2);
            border-radius: 0.5rem;
            width: 100%;
            padding: 0.5rem 0.75rem;
            color: var(--text-color-primary);
            line-height: 1.25;
            background-color: var(--bg-color-mid);
          }
          
          .form-input:focus, .form-textarea:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
            border-color: var(--blue-color);
          }
          
          .form-textarea {
            height: 6rem;
          }
          
          .remove-button {
            position: absolute;
            top: 1rem;
            right: 1rem;
            color: #ef4444;
            transition-property: color;
            transition-duration: 150ms;
            background: none;
            border: none;
            cursor: pointer;
          }
          
          .remove-button:hover {
            color: #f87171;
          }
          
          .date-fields {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .add-button {
            width: 100%;
            padding: 0.5rem 1rem;
            background-color: #3b82f6;
            color: #fff;
            border-radius: 0.5rem;
            transition-property: background-color;
            transition-duration: 150ms;
            outline: none;
            border: none;
            cursor: pointer;
          }
          
          .add-button:hover {
            background-color: #2563eb;
          }
          
          .buttons-container {
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            margin-bottom: 1rem;
          }
          
          .print-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1.5rem;
            background-color: #3b82f6;
            color: white;
            font-weight: 600;
            border-radius: 0.5rem;
            box-shadow: var(--shadow-light);
            transition: transform 200ms ease-in-out, background-color 150ms;
            transform: translateY(0);
            border: none;
            cursor: pointer;
          }
          
          .print-button:hover {
            background-color: #2563eb;
            transform: translateY(-0.25rem);
          }
          
          .print-button:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5), 0 0 0 4px rgba(15, 23, 42, 0.8);
          }
          
          .sticky-preview {
            position: sticky;
            top: 2rem;
          }
          
          .resume-display-container {
            padding: 2rem;
            background-color: var(--bg-color-mid);
            border-radius: 0.75rem;
            box-shadow: var(--shadow-light);
            border: 1px solid rgba(59, 130, 246, 0.2);
            color: var(--text-color-primary);
          }
          
          .resume-header {
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid var(--blue-color);
          }
          
          .resume-name {
            font-size: 2.25rem;
            font-weight: 700;
            color: var(--blue-light-color);
          }
          
          .resume-title {
            font-size: 1.25rem;
            color: var(--text-color-secondary);
            margin-top: 0.5rem;
          }
          
          .contact-info {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 1rem;
            font-size: 0.875rem;
            color: var(--text-color-light);
          }
          
          .contact-item {
            display: flex;
            align-items: center;
            gap: 0.25rem;
          }
          
          .contact-item .icon {
            height: 1rem;
            width: 1rem;
          }
          
          .link {
            text-decoration: underline;
            color: var(--blue-light-color);
          }
          
          .resume-section {
            margin-bottom: 2rem;
          }
          
          .resume-section-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--blue-light-color);
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--bg-color-light);
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .resume-summary {
            color: var(--text-color-secondary);
            line-height: 1.625;
          }
          
          .experience-item {
            margin-bottom: 1.5rem;
          }
          
          .experience-header, .education-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
          
          .experience-company, .education-school {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-color-primary);
          }
          
          .experience-job-title, .education-degree {
            font-size: 1.125rem;
            color: var(--text-color-secondary);
          }
          
          .experience-dates, .education-year {
            color: var(--text-color-light);
            font-size: 0.875rem;
          }
          
          .experience-description {
            list-style-type: disc;
            list-style-position: inside;
            margin-top: 0.5rem;
            color: var(--text-color-secondary);
            padding-left: 1rem;
          }

          .experience-description li {
            padding-left: 0.5rem;
          }
          
          .skills-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            font-size: 0.875rem;
          }
          
          .skill-tag {
            background-color: rgba(59, 130, 246, 0.3);
            color: #bfdbfe;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
          }
          
          /* --- PRINT-SPECIFIC STYLES --- */
          @media print {
            /* Hide the entire input form, print buttons, and instructions */
            .form-section-wrapper, .buttons-container, .print-tip {
                display: none !important;
            }

            /* Show only the resume display section */
            .preview-section-wrapper {
                width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
            }
            
            /* Remove the sticky positioning for print */
            .sticky-preview {
                position: static !important;
                top: auto !important;
            }

            /* Reset container styles for printing on a clean page */
            .main-container, .main-wrapper, .resume-display-container {
                background-color: white !important;
                color: black !important;
                padding: 0 !important;
                margin: 0 !important;
                box-shadow: none !important;
                border: none !important;
                overflow: visible !important;
                width: 100% !important;
                max-width: 100% !important;
                border-radius: 0 !important;
            }

            /* Remove the gradient border for print */
            .main-wrapper::before {
              display: none !important;
            }

            /* Ensure all text is black for printing */
            body, p, span, h1, h2, h3, h4, li, a {
              color: black !important;
            }
            
            /* Give some color to the resume title for a better look */
            .resume-name {
              color: #2563eb !important;
            }
            .resume-section-title {
              color: #2563eb !important;
            }

            /* Ensure background colors are white */
            .resume-section-title, .resume-header {
                border-bottom-color: #ccc !important;
            }

            /* Apply standard print margins to the resume content */
            #resume-display {
                padding: 1in !important;
            }

            /* Use @page to control print margins and headers/footers */
            @page {
              size: letter;
              margin: 1in;
            }
          }
        `}
      </style>
      <div className="main-container">
        {/* Main container with futuristic gradient border */}
        <div className="main-wrapper">
          <div className="form-section-wrapper">
            <h1 className="app-title">Resume Builder</h1>
            <p className="app-description">
              Fill out the form below to create your professional resume. The preview will update in real-time.
            </p>
            <div id="input-form">
              <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
            </div>
          </div>

          <div className="preview-section-wrapper">
            <div id="buttons-container" className="buttons-container">
              <button
                onClick={handlePrint}
                className="print-button"
              >
                <PrinterIcon />
                Print to PDF
              </button>
            </div>
            {/* Simple tip that will be hidden on print */}
            <p className="print-tip text-sm text-gray-400 mt-2 text-right">
              In the print dialog, you can disable "Headers and Footers" for a cleaner look.
            </p>
            <div className="sticky-preview">
              <ResumeDisplay resumeData={resumeData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
