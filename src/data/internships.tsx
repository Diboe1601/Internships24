import React from "react";

export interface InternshipData {
  title: string;
  key: string;
  details: JSX.Element;
}

export const internships: InternshipData[] = [
  {
    title: "Services SETA: Internships 2026",
    key: "services-seta",
    details: (
      <div className="space-y-4">
        <p><strong>About:</strong> The Services Sector Education and Training Authority (Services SETA) is running a national internship programme (PowerX²) to place graduates into workplace training across public and private employers.</p>
        <div>
          <p className="font-semibold">Duration & Stipend:</p>
          <ul className="list-disc ml-5">
            <li>Typically 24 months for PowerX².</li>
            <li>Other listings show a 12-month internship with ~R7 000 pm stipend.</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Requirements:</p>
          <ul className="list-disc ml-5">
            <li>Completed an NQF Level 4–7 qualification (e.g., Diploma, Degree) from a public university or TVET college.</li>
            <li>Unemployed at time of application.</li>
            <li>Available for the full duration (typically 24 months).</li>
            <li>Willing to be placed anywhere in South Africa (matching to host organisation).</li>
            <li>Submit an Expression of Interest (EOI) online and later certified: ID, qualification proof, CV, proof of residence, and bank details.</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Fields:</p>
          <p>Various including Finance, HR, Marketing, ICT, Business/Admin depending on host placements.</p>
          <p className="mt-3">
            <a href="https://www.graduates24.com/Apply/13405" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Click here to apply !!!</a>
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Department of Tourism: Internship 2026",
    key: "dept-tourism",
    details: (
      <div className="space-y-4">
        <p><strong>About:</strong> A 24-month paid internship for unemployed South African graduates to work in government tourism and administrative functions.</p>
        <div>
          <p className="font-semibold">Stipend:</p>
          <p>~R7 450.58 per month.</p>
        </div>
        <div>
          <p className="font-semibold">Requirements:</p>
          <ul className="list-disc ml-5">
            <li>South African citizen, unemployed.</li>
            <li>35 years old or younger.</li>
            <li>Must not have previously done an internship in government.</li>
            <li>Completed a relevant degree or postgraduate qualification.</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Fields (Examples):</p>
          <ul className="list-disc ml-5">
            <li>ICT/Computer Science</li>
            <li>HR & HR Development</li>
            <li>Digital Transformation</li>
            <li>Business Administration/Public Management</li>
            <li>Financial Accounting</li>
            <li>Risk Management/Internal Audit</li>
            <li>Psychology/Social Work</li>
            <li>Policy, Project & Supply Chain Management, and more</li>
            
          </ul>
        </div>
        <div>
          <p className="font-semibold">Application:</p>
          <p>Submit Z83 form + CV + certified copies of ID and qualifications.</p>
          <p className="mt-3">
            <a href="https://www.graduates24.com/Apply/13297" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Click here to apply !!!</a>
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Visa: Internship Opportunities 2026",
    key: "visa",
    details: (
      <div className="space-y-4">
        <p><strong>About:</strong> Visa South Africa internships are typically corporate internships (often in tech, business, and finance). Official 2026 details may not be fully published yet.</p>
        <div>
          <p className="font-semibold">Expected Requirements (typical):</p>
          <ul className="list-disc ml-5">
            <li>Completed or final-year degree in a relevant field (e.g., IT, Finance, Marketing, Business).</li>
            <li>Strong communication and analytical skills.</li>
            <li>Eligible to work in South Africa.</li>
            <li>CV, cover letter, transcripts usually required.</li>
          </ul>
        </div>
        <p className="text-muted-foreground">Note: Once official Visa postings open, they’ll list specific qualification matches and duties.</p>
        <p className="mt-3">
          <a href="https://www.graduates24.com/Apply/13061" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Click here to apply !!!</a>
        </p>
      </div>
    ),
  },
  {
    title: "SA Government: Internship 2026",
    key: "sa-govt",
    details: (
      <div className="space-y-4">
        <p><strong>About:</strong> The South African Government runs internship and in-service training programmes across many departments (Health, Home Affairs, Public Works, Police, Municipalities, etc.).</p>
        <div>
          <p className="font-semibold">General Requirements:</p>
          <ul className="list-disc ml-5">
            <li>South African citizen, unemployed.</li>
            <li>At least a Degree or Diploma (for internships).</li>
            <li>Z83 application form + CV + certified documents.</li>
            <li>Age usually 18–35 (varies by department).</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Common Fields Available:</p>
          <ul className="list-disc ml-5">
            <li>HR, Finance & Supply Chain</li>
            <li>ICT/Admin</li>
            <li>Public Management & Policy</li>
            <li>Engineering & Technical (some SOEs like Eskom, SANRAL)</li>
            <li>Environmental & Social Sciences</li>
            <li>Municipal services (water, sanitation, planning)</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Benefits:</p>
          <p>Structured workplace exposure, usually with a monthly stipend.</p>
          <p className="mt-3">
            <a href="https://www.graduates24.com/jobs/viewjob/5565" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Click here to apply !!!</a>
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Mercedes-Benz: Graduate Internships 2026",
    key: "mercedes-benz",
    details: (
      <div className="space-y-4">
        <p><strong>About:</strong> Mercedes-Benz South Africa’s Graduate Development Programme (GDP) 2026 offers practical experience at a world-class automotive company.</p>
        <div>
          <p className="font-semibold">Requirements:</p>
          <ul className="list-disc ml-5">
            <li>South African citizen.</li>
            <li>Completed a tertiary qualification (Diploma NQF 6 / Degree / Advanced Diploma NQF 7).</li>
            <li>Minimum average 65% in your qualification.</li>
            <li>Graduated within the past 3 years.</li>
            <li>Include CV + certified Matric & tertiary certificates, ID & academic transcript.</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Eligible Fields:</p>
          <ul className="list-disc ml-5">
            <li>IT & Computer Sciences</li>
            <li>Accounting & Financial Management</li>
            <li>Business/Marketing/Project Management</li>
            <li>Logistics & Supply Chain</li>
            <li>Data Science & Analytics</li>
            <li>Social Sciences & Organisational Studies</li>
            <li>Law (LLB with at least 1 year post-admission experience)</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Location:</p>
          <p>Pretoria, Gauteng.</p>
          <p className="mt-3">
            <a href="https://www.graduates24.com/Apply/13341e" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Click here to apply !!!</a>
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Pernod Ricard: Graduate Internships 2026",
    key: "pernod-ricard",
    details: (
      <div className="space-y-4">
        <p><strong>About:</strong> Pernod Ricard South Africa offers a 12-month YES Graduate Internship Programme focused on business functions.</p>
        <div>
          <p className="font-semibold">Requirements:</p>
          <ul className="list-disc ml-5">
            <li>Completed Bachelor’s degree or higher in relevant area.</li>
            <li>Strong communication (verbal & written).</li>
            <li>Good Microsoft Office skills (Excel, Word, PowerPoint).</li>
            <li>Positive, entrepreneurial attitude.</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Field Areas:</p>
          <ul className="list-disc ml-5">
            <li>Commerce</li>
            <li>Procurement & Operations</li>
            <li>Transformation</li>
            <li>Finance</li>
            <li>Marketing</li>
            <li>Human Resources</li>
            <li>Corporate Affairs</li>
          </ul>
          <p className="mt-3">
            <a href="https://www.graduates24.com/Apply/13389" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Click here to apply !!!</a>
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Unilever: Learnership Opportunities 2026",
    key: "unilever",
    details: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold">About:</p>
          <p>Unilever’s 2026 learnership is more operations / production focused rather than a corporate graduate internship, typically offered at factories such as in Boksburg.</p>
        </div>
        <div>
          <p className="font-semibold">Requirements:</p>
          <ul className="list-disc ml-5">
            <li>National Senior Certificate (Matric) with at least Maths & Science OR an N2/N3/N4 Engineering qualification.</li>
            <li>Commitment to complete assessments and workplace logbook requirements.</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Skills & Competencies:</p>
          <ul className="list-disc ml-5">
            <li>Basic machinery and quality monitoring.</li>
            <li>Teamwork and safety awareness.</li>
            <li>Communication and problem-solving focus.</li>
          </ul>
          <p className="mt-3">
            <a href="https://www.graduates24.com/Apply/13390" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Click here to apply !!!</a>
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "South African National Roads Agency (SANRAL): Internships 2026",
    key: "sanral",
    details: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold">About:</p>
          <p>South African National Roads Agency offers engineering-focused internships (Asset Management & Research & Innovation).</p>
        </div>
        <div>
          <p className="font-semibold">Duration & Pay:</p>
          <ul className="list-disc ml-5">
            <li>Full-time 24-month programme.</li>
            <li>Approx R96 000 per year.</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Requirements:</p>
          <ul className="list-disc ml-5">
            <li>Civil Engineering NQF 6+ qualification (Asset Management) OR NQF 7 in Public Admin & Management (Research & Innovation).</li>
            <li>CV, cover letter, ID, certified qualifications & transcripts.</li>
            <li>Able to relocate to Pretoria.</li>
          </ul>
          <p className="mt-3">
            <a href="https://www.graduates24.com/Apply/13386" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Click here to apply !!!</a>
            </p>
        </div>
      </div>
    ),
  },
];

export const getInternshipByKey = (key: string) => internships.find((i) => i.key === key);

export interface InternshipItemAlt {
  key: string;
  title: string;
  details: React.ReactNode;
}

export const internshipsAlt: InternshipItemAlt[] = [
  {
    key: "services-seta",
    title: "Services SETA: Graduate Internships 2026",
    details: (
      <div>
        <p>Services SETA offers Graduate Internships across disciplines for 2026.</p>
        <h4>Eligibility</h4>
        <ul className="list-disc pl-6">
          <li>South African citizens</li>
          <li>Recent graduates (NQF 6/7/8)</li>
          <li>No prior full-time work experience required</li>
        </ul>
        <h4>How to Apply</h4>
        <p>Visit the Services SETA careers portal and search for 2026 Graduate Internships.</p>
      </div>
    ),
  },
  {
    key: "dept-tourism",
    title: "Department of Tourism: Internships 2026",
    details: (
      <div>
        <p>Department of Tourism offers internship opportunities for 2026.</p>
        <h4>Fields</h4>
        <ul className="list-disc pl-6">
          <li>Tourism Management</li>
          <li>Business Administration</li>
          <li>Public Management</li>
        </ul>
        <h4>Application</h4>
        <p>Use Z83 form with detailed CV; submit before closing date.</p>
      </div>
    ),
  },
  {
    key: "visa",
    title: "Visa: Internship Program 2026",
    details: (
      <div>
        <p>Visa offers internships in technology, product, and business tracks.</p>
        <h4>Requirements</h4>
        <ul className="list-disc pl-6">
          <li>Studying towards a Bachelor’s/Master’s</li>
          <li>Strong analytical and communication skills</li>
        </ul>
        <h4>Locations</h4>
        <p>Johannesburg and Cape Town</p>
      </div>
    ),
  },
  {
    key: "sa-government",
    title: "South African Government: Internship Programme 2026",
    details: (
      <div>
        <p>Government departments offer internships across the country.</p>
        <h4>Documents</h4>
        <ul className="list-disc pl-6">
          <li>Z83 application form</li>
          <li>Certified copies of qualifications and ID</li>
        </ul>
      </div>
    ),
  },
  {
    key: "mercedes-benz",
    title: "Mercedes-Benz: Graduate Development Programme 2026",
    details: (
      <div>
        <p>Rotational graduate programme at Mercedes-Benz South Africa.</p>
        <h4>Fields</h4>
        <ul className="list-disc pl-6">
          <li>Engineering</li>
          <li>Finance</li>
          <li>Supply Chain</li>
        </ul>
        <h4>Location</h4>
        <p>East London, Eastern Cape</p>
      </div>
    ),
  },
  {
    key: "pernod-ricard",
    title: "Pernod Ricard: Internship Programme 2026",
    details: (
      <div>
        <p>Paid internships in marketing, sales, and supply chain.</p>
        <h4>Requirements</h4>
        <ul className="list-disc pl-6">
          <li>Recent graduates</li>
          <li>Strong teamwork and communication skills</li>
        </ul>
      </div>
    ),
  },
  {
    key: "unilever",
    title: "Unilever: Learnership Opportunities 2026",
    details: (
      <div>
        <p>Unilever invites applications for Learnership Opportunities in 2026 across multiple specializations.</p>
        <h4>Programme Overview</h4>
        <ul className="list-disc pl-6">
          <li>Nationally recognized NQF-aligned learnerships with practical workplace exposure</li>
          <li>12-month structured learning with mentorship and on-the-job experience</li>
          <li>Stipend provided for the duration of the learnership</li>
        </ul>
        <h4>Fields</h4>
        <ul className="list-disc pl-6">
          <li>Supply Chain and Manufacturing Operations</li>
          <li>Quality Assurance and Laboratory</li>
          <li>Sales and Customer Development</li>
          <li>Marketing and Brand</li>
          <li>Finance and Business Support</li>
          <li>IT and Digital</li>
        </ul>
        <h4>Eligibility</h4>
        <ul className="list-disc pl-6">
          <li>South African citizen (18–35)</li>
          <li>Matric/Grade 12 with maths and English; additional NQF level beneficial</li>
          <li>Unemployed and not currently studying full-time</li>
        </ul>
        <h4>Locations</h4>
        <p>KwaZulu-Natal, Gauteng, Western Cape (varies by business unit)</p>
        <h4>How to Apply</h4>
        <p>Visit the Unilever careers website and search for 2026 Learnerships. Prepare a CV and certified copies of ID and highest qualification.</p>
      </div>
    ),
  },
  {
    key: "sanral",
    title: "SANRAL: Internships 2026",
    details: (
      <div>
        <p>SANRAL offers engineering and support internships for 2026.</p>
        <h4>Fields</h4>
        <ul className="list-disc pl-6">
          <li>Civil Engineering</li>
          <li>Project Management</li>
          <li>Finance and Administration</li>
        </ul>
        <h4>Eligibility</h4>
        <ul className="list-disc pl-6">
          <li>Recent graduates</li>
          <li>Strong academic performance</li>
        </ul>
        <h4>Application</h4>
        <p>Apply via SANRAL’s official careers page. Include CV and academic transcripts.</p>
      </div>
    ),
  },
];

export function getInternshipItemByKey(key: string): InternshipItemAlt | undefined {
  return internshipsAlt.find(i => i.key === key);
}