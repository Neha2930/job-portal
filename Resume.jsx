import React from "react";

const Resume = React.forwardRef((props, ref) => {
  const user = props.userData || props.user || {
    name: "John Doe",
    email: "john@gmail.com",
    phone: "+91 9876543210",
    address: "Patiala, Punjab",
    education: "B.Tech CSE - Punjabi University",
    skills: "React, Bootstrap, JavaScript, HTML, CSS",
    projects: "Responsive Job Portal",
    experience: "Fresher"
  };

  return (
    <div ref={ref} id="resume" style={{ padding: "30px", background: "#fff", color: "#1e293b", fontFamily: "'Inter', sans-serif" }}>
      <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#0f172a", marginBottom: "8px" }}>{user.name}</h2>
      <hr style={{ margin: "12px 0", border: "none", borderTop: "2px solid #3b82f6" }} />
      <p style={{ margin: "6px 0", fontSize: "14px" }}><strong>Email:</strong> {user.email}</p>
      <p style={{ margin: "6px 0", fontSize: "14px" }}><strong>Phone:</strong> {user.phone}</p>
      <p style={{ margin: "6px 0", fontSize: "14px" }}><strong>Address:</strong> {user.address}</p>
      
      <h4 style={{ marginTop: "20px", marginBottom: "6px", fontSize: "16px", fontWeight: "600", color: "#1e40af", borderBottom: "1px solid #e2e8f0", paddingBottom: "4px" }}>Education</h4>
      <p style={{ margin: "4px 0", fontSize: "14px", color: "#334155" }}>{user.education}</p>
      
      <h4 style={{ marginTop: "20px", marginBottom: "6px", fontSize: "16px", fontWeight: "600", color: "#1e40af", borderBottom: "1px solid #e2e8f0", paddingBottom: "4px" }}>Skills</h4>
      <p style={{ margin: "4px 0", fontSize: "14px", color: "#334155" }}>{user.skills}</p>
      
      <h4 style={{ marginTop: "20px", marginBottom: "6px", fontSize: "16px", fontWeight: "600", color: "#1e40af", borderBottom: "1px solid #e2e8f0", paddingBottom: "4px" }}>Projects</h4>
      <p style={{ margin: "4px 0", fontSize: "14px", color: "#334155" }}>{user.projects}</p>
      
      <h4 style={{ marginTop: "20px", marginBottom: "6px", fontSize: "16px", fontWeight: "600", color: "#1e40af", borderBottom: "1px solid #e2e8f0", paddingBottom: "4px" }}>Experience</h4>
      <p style={{ margin: "4px 0", fontSize: "14px", color: "#334155" }}>{user.experience}</p>
    </div>
  );
});

export default Resume;
