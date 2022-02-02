import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Read data from Google spreadsheet in Angular',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular 10 , Google SpreadsheetApi'
    },
  ]
  about2 = `Software Developer with 3+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Currently pursuing MSCS from Purdue University .
  Expertise: Python · Java · JavaScript · Angular · MySQL · C · C++ · Machine Learning · Cloud Computing · Distributed Systems · ELK · Dockers · Kubernetes · Apache Airflow · AWS · MongoDB · Security · Flask · Virtualization · Powershell `

  about ="Life's motto: Don't settle for good, demand great!"
  resumeurl = "https://drive.google.com/file/d/1OdRv9v8Z6CdhOg0hz_KLmTuaaMKQOKbG/view?usp=sharing"

  // skillsData: any = [
  //   {
  //     'id': '1',
  //     'skill': 'ANGULAR 2+',
  //     'progress': '85%'
  //   },
  //   {
  //     'id': '2',
  //     'skill': 'NODE JS',
  //     'progress': '80%'
  //   },
  //   {
  //     'id': '3',
  //     'skill': 'JAVASCRIPT JQUERY',
  //     'progress': '80%'
  //   },
  //   {
  //     'id': '4',
  //     'skill': 'SQL , MYSQL,MONOGO, FIREBASE',
  //     'progress': '75%'
  //   },
  //   {
  //     'id': '5',
  //     'skill': 'REACT JS',
  //     'progress': '75%'
  //   },
  //   {
  //     'id': '6',
  //     'skill': 'PYTHON,JAVA',
  //     'progress': '70%'
  //   }
  // ];
  skillsData: any = `Python . Java . JavaScript . Angular . MySQL . C . C++ . Machine Learning . Cloud Computing . Distributed Systems . ELK . Dockers . Kubernetes . Apache Airflow . AWS . MongoDB . Security . Flask . Virtualization . Powershell`;


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2021 - 2023',
      'education': 'Master\'s Degree',
      'stream': 'MS - Computer Science',
      'info': `Currently a first year MSCS Graduate Student at Purdue University .
      Current GPA: 4.0`,
      'institution': 'Purdue University, West Lafayette'
    },
    {
      'id': '2',
      'from_to_year': '2014 - 2018',
      'education': 'Bachelor\'s Degree',
      'stream': 'B\'Tech - Computer Science',
      'institution': 'PES University, Bangalore',
      'info': `Graduated with a GPA of 9.39/10 .
      Scholarship: Secured C.N.R.Rao Scholarship for all 8 Semesters for being in the Top 10% of the University.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2014',
      'education': 'Pre University',
      'stream': 'Science - PCMB',
      'institution': 'Mahesh PU College, Mangalore',
      'info': `Studied Pre University Physics, Chemistry, Math and Biology .
      Graduated with 95%.`
    }
  ];
  exprienceData: any = [
    {
      id: 5,
      company: 'Purdue University - Library Science',
      location: 'West Lafayette, USA',
      timeline: 'Aug 2021 - Present',
      role: 'Research Assistant',
      work: `Research Assistant working with Purdue University Library Sciences working on techniques of data preservation, extraction and visualization. . 
      Involved with development of PURR - Research Repository.`

    },
    {
      id: 4,
      company: 'Societe Generale - GSC',
      location: 'Bangalore, India',
      timeline: 'Jul 2018 - Jul 2021',
      role: 'Senior Software Engineer',
      work: `Single-handedly developed cloud native web applications (infrastructure as a service) to track, monitor and upgrade VM’s and hardware assets; 
      serving 200 daily users and saving efforts of 10 full-time employees .
      TechStack: Angular 8, Python, MongoDB, RabbitMQ, Kubernetes . 
      Designed and developed workflows and plugins to detect and auto resolve failures in VMs and Servers using Apache Airflow Orchestrator with the detection algorithm built using the Support Vector Machine model.
      This reduced manual intervention/downtime by 40% .
      Tech Stack: Apache Airflow, Apache Kafka, ELK Stack, Prometheus.`

    },
    {
      id: 3,
      company: 'ISRO-RRSC',
      location: 'Bangalore, India',
      timeline: 'Jan 2018 - May 2018',
      role: 'Research Intern',
      work: `Designed a solution to extract data on growth in the number of buildings in an area over a period of time using high resolution geospatial satellite imaging .

      Developed an ML model using Convolutional Neural Networks with a sliding window approach yielding results with an accuracy of 90% . 
      
      Approved by ISRO and the findings published as a research paper in the IEEE Journal- “Classification of Urban Data using Satellite Imaging”.`
    },

    {
      id: 2,
      company: 'Center for Cloud Computing and Big Data, PES University',
      location: 'Bangalore, India',
      timeline: 'Aug 2016 - Dec 2017',
      role: 'Researcher',
      work: `Analysed the impact of Software Stack such as Java Version, Java Vendors, different OS on Big Data Application such as Hadoop using micro-architectural
       detail such as cache misses, cache stores, branch misses etc by measuring the micro-architectural details . 
      We used Principal component analysis to reduce the number of dimensions and ran k-means clustering to identify areas of similarity among different software stack .
      Results of research were used as a benchmark to analyse the advantages of upgrading to a higher version or switching to a different vendor of the application. 
  `
    },

    {
      id: 1,
      company: 'PwC',
      location: 'Bangalore, India',
      timeline: 'Jun 2017 - Jul 2017',
      role: 'Intern - Trainee',
      work: `Trainee at PwC .
      Worked on Artificial intelligence . 
      Developed customised AI ‘helpdesk’ chatbots on Facebook messenger and Skype (Python Flask, JS, Google API.AI) for 10 different clients that helped in reducing redundant customer enquiry calls by 30%.
  `
    },


  ]

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  experience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
