export interface Learnership {
  title: string;
  key: string;
  details: JSX.Element;
}

const learnerships: Learnership[] = [
  {
    title: "MICT SETA: ICT & Digital Skills Learnership",
    key: "mict-seta",
    details: (
      <div className="space-y-4">
        <p><strong>About:</strong> MICT SETA offers accredited learnerships in ICT and digital skills, combining classroom learning with workplace experience in systems development, IT support, and digital marketing.</p>
        <div>
          <p className="font-semibold">Duration & Stipend:</p>
          <ul className="list-disc ml-5">
            <li>Typically 12-24 months</li>
            <li>Monthly stipend: R3,000 - R6,500 (varies by level)</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Requirements:</p>
          <ul className="list-disc ml-5">
            <li>South African citizen or permanent resident</li>
            <li>Age 18-35</li>
            <li>Matric (Grade 12) or equivalent qualification</li>
            <li>Unemployed at time of application</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Fields:</p>
          <p>Systems Development, IT Support, Digital Marketing</p>
        </div>
      </div>
    ),
  },
  {
    title: "MERSETA: Engineering & Manufacturing Learnership",
    key: "merseta",
    details: (
      <div className="space-y-4">
        <p><strong>About:</strong> MERSETA provides learnerships in engineering and manufacturing sectors including welding, fitting, turning, and mechanical engineering roles.</p>
        <div>
          <p className="font-semibold">Duration & Stipend:</p>
          <ul className="list-disc ml-5">
            <li>12-24 months typically</li>
            <li>Includes workplace experience with stipend</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Requirements:</p>
          <ul className="list-disc ml-5">
            <li>South African citizenship</li>
            <li>Matric with Mathematics and Science preferred</li>
            <li>Age 18-35</li>
            <li>Unemployed status</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Fields:</p>
          <p>Welding, Fitting, Turning, Mechanical Engineering, Technical trades</p>
        </div>
      </div>
    ),
  },
  {
    title: "W&RSETA: Retail Operations Learnership",
    key: "wrseta",
    details: (
      <div className="space-y-4">
        <p><strong>About:</strong> Wholesale and Retail SETA offers learnerships in retail operations, sales, and stock control with practical experience in the retail sector.</p>
        <div>
          <p className="font-semibold">Duration & Stipend:</p>
          <ul className="list-disc ml-5">
            <li>12-24 months</li>
            <li>Monthly stipend provided</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Requirements:</p>
          <ul className="list-disc ml-5">
            <li>South African citizenship</li>
            <li>Grade 12 (Matric)</li>
            <li>Age 18-35</li>
            <li>Unemployed status required</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Fields:</p>
          <p>Retail Operations, Sales, Stock Control, Customer Service</p>
        </div>
      </div>
    ),
  },
  {
    title: "BANKSETA: Banking & Finance Learnership",
    key: "bankseta",
    details: (
      <div className="space-y-4">
        <p><strong>About:</strong> Banking sector learnerships offering structured training and on-the-job experience in banking and financial services roles.</p>
        <div>
          <p className="font-semibold">Duration & Stipend:</p>
          <ul className="list-disc ml-5">
            <li>12-24 months</li>
            <li>Competitive monthly stipend</li>
            <li>NQF-registered qualification upon completion</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Requirements:</p>
          <ul className="list-disc ml-5">
            <li>South African citizen</li>
            <li>Matric certificate</li>
            <li>Age 18-35</li>
            <li>Unemployed at application time</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Fields:</p>
          <p>Banking Services, Finance, Customer Service, Administrative roles</p>
        </div>
      </div>
    ),
  },
  {
    title: "UIF-LAP: Free 12-Month Learnership Programme",
    key: "uif-lap",
    details: (
      <div className="space-y-4">
        <p><strong>About:</strong> UIF Labour Activation Programme offers free learnerships across multiple sectors including Agriculture, Construction, ICT, Environmental practice, and Admin roles.</p>
        <div>
          <p className="font-semibold">Duration & Stipend:</p>
          <ul className="list-disc ml-5">
            <li>12-month structured programme</li>
            <li>Stipends vary by sector (R3,000 - R6,500 monthly)</li>
            <li>Free to apply</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Available Sectors:</p>
          <ul className="list-disc ml-5">
            <li>Agriculture</li>
            <li>Construction</li>
            <li>ICT</li>
            <li>Environmental practice</li>
            <li>Administrative roles</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Eligibility:</p>
          <p>South African citizen, 18-35 years old, unemployed, all provinces covered</p>
        </div>
      </div>
    ),
  },
  {
    title: "Department Learnerships: Agriculture & Rural Development",
    key: "dept-agriculture",
    details: (
      <div className="space-y-4">
        <p><strong>About:</strong> Department of Agriculture & Rural Development offers learnerships in agricultural and rural development with NQF Level 2-4 qualifications.</p>
        <div>
          <p className="font-semibold">Duration & Stipend:</p>
          <ul className="list-disc ml-5">
            <li>12-24 months (varies)</li>
            <li>Monthly stipend provided</li>
            <li>NQF registered qualification</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Requirements:</p>
          <ul className="list-disc ml-5">
            <li>Age 18-35 years</li>
            <li>South African citizenship</li>
            <li>Matric or equivalent</li>
            <li>Unemployed status</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Focus Areas:</p>
          <p>Agricultural skills, Rural development, Sustainable farming practices</p>
        </div>
      </div>
    ),
  },
  {
    title: "LearnMe Learnership 2026: Business Admin & Marketing",
    key: "learnme",
    details: (
      <div className="space-y-4">
        <p><strong>About:</strong> LearnMe offers business administration, marketing, and contact centre support learnerships across major South African cities with practical workplace experience.</p>
        <div>
          <p className="font-semibold">Duration & Stipend:</p>
          <ul className="list-disc ml-5">
            <li>12-month learnerships</li>
            <li>Monthly stipend during programme</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Fields Available:</p>
          <ul className="list-disc ml-5">
            <li>Business Administration</li>
            <li>Marketing</li>
            <li>Contact Centre Operations</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Requirements:</p>
          <ul className="list-disc ml-5">
            <li>South African citizen</li>
            <li>Matric (Grade 12)</li>
            <li>Age 18-35</li>
            <li>Must be unemployed</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "YES Learnership: National Youth Employment Service",
    key: "yes-learnership",
    details: (
      <div className="space-y-4">
        <p><strong>About:</strong> National Youth Service (YES) offers 12-month paid work experience and skills development through various companies and public sector partners across South Africa.</p>
        <div>
          <p className="font-semibold">Duration & Pay:</p>
          <ul className="list-disc ml-5">
            <li>12-month paid work experience</li>
            <li>Monthly stipend and benefits</li>
            <li>Skills training included</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Eligibility:</p>
          <ul className="list-disc ml-5">
            <li>South African citizen</li>
            <li>Age 18-35 years old</li>
            <li>Unemployed</li>
            <li>Willing to work in various sectors</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Available Across:</p>
          <p>Retail, Manufacturing, Finance, ICT, and other sectors nationwide</p>
        </div>
      </div>
    ),
  },
];

export function getLearnershipsData(): Learnership[] {
  return learnerships;
}

export function getLearnershipsDataByKey(key: string): Learnership | undefined {
  return learnerships.find(l => l.key === key);
}
