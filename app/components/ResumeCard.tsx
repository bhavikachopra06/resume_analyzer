import { Link } from "react-router"
import "./ResumeCard.css";  
import ScoreCircle from "../components/ScoreCircle";
const ResumeCard = ({resume: { id, companyName, jobTitle, feedback, imagePath }} : {resume: Resume}) => {
  return (
    <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000">
     <div className="resume-card-header">
        <div className="resume-info">
            {companyName && <h2 className="company-name">{companyName}</h2>}
            {jobTitle && <h3 className="job-title">{jobTitle}</h3>}
             {!companyName && !jobTitle && <h2 className="company-name">Resume</h2>}
        </div>
        <div className="score-wrapper">
            <ScoreCircle score={feedback.overallScore} />
        </div>
     </div>
    </Link>
  )
}

export default ResumeCard
