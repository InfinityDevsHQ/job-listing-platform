type JobData = {
  id: number;
  title: string;
  isHot: boolean;
  external_company_name: string;
  employment_type: string;
  experienceRequired: string;
  location: string;
  salary: string;
  applications: number;
  datePosted: string;
  description: string;
  badges: [
    { text: 'Python'; color: '#ffffff'; bgColor: '#000000' },
    { text: 'Django'; color: '#000000'; bgColor: '#ffffff' },
    { text: 'Sql' },
    { text: 'Git' },
  ];
};
