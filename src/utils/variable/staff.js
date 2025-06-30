export const staffTableHeading = [
  {
    name: "Staff ID",
    path1: "userId",
    path2: "id",
    isNested: true,
  },
  {
    name: "Staff Name",
    path1: "userId",
    path2: "name",
    isNested: true,
  },
  {
    name: "Phone No.",
    isDoubleNested: true,
    path1: "userId",
    path2: "mobileNumber",
    path3: "number",
  },

  {
    name:"Gender",
    path1:"userId",
    path2:"gender",
    isNested:true
},
{
    name:"Blood Group",
    path2:"bloodGroup",
    path1:"userId",
    isNested:true
},
{
    name:"Designation",
    path2:"designation",
    path1:"userId",
    isNested:true
},
{
    name:"Status",
    path:"status",
    type:"tag"
},
{
    name:"Action",
    path:"normal"
}
];

export const stateDistrictMap = {
  "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "YSR Kadapa"],
  "Arunachal Pradesh": ["Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Siang", "Upper Siang", "Lower Siang", "Changlang", "Tirap", "Longding", "Namsai", "Anjaw", "Lower Dibang Valley", "Dibang Valley"],
  "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup", "Karbi Anglong", "West Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "Vishwanath"],
  "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
  "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
  "Goa": ["North Goa", "South Goa"],
  "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Valsad", "Vadodara"],
  "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
  "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
  "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
  "Karnataka": ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davangere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"],
  "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
  "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
  "Maharashtra": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
  "Manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
  "Meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri-Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
  "Mizoram": ["Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip", "Saitual"],
  "Nagaland": ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto", "Noklak"],
  "Odisha": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Debagarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"],
  "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Tarn Taran"],
  "Rajasthan": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
  "Sikkim": ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
  "Tamil Nadu": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupattur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
  "Telangana": ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"],
  "Tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
  "Uttar Pradesh": ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddh Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shrawasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
  "Uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
  "West Bengal": ["Alipurduar", "Bankura", "Paschim Bardhaman", "Purba Bardhaman", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Medinipur", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"]
};

export const staffFields = [
  [
    {
      label: "Staff ID",
      name: "id",
      type: "text",
    },
    {
      label: "Staff Name",
      name: "name",
      type: "text",
    },
  ],
  [
    {
      label: "Father's Name",
      name: "fatherName",
      type: "text",
    },
    {
      label: "Husband's Name",
      name: "husbandName",
      type: "text",
    },
    {
      label: "Mobile Number",
      name: "mobileNumber",
      options: ["+91", "+92", "+93"],
      inputName: "number",
      dropdownName: "countryCode",
      type: "inputdropdown",
    },
  ],
  [
    [
      {
        label: "Date of Birth",
        name: "dob",
        type: "date",
      },
      // {
      //   label: "Age",
      //   name: "age",
      //   type: "text",
      // },
    ],
    {
      label: "Gender",
      name: "gender",
      options: ["Male", "Female", "Other"],
      type: "select",
    },
  ],[
    {
      label: "Martial Status",
      name: "martial_status",
      options: ["Single", "Married", "Other"],
      type: "select",
    },
    {
      label: "Qualification",
      name: "qualification",
      type: "text",
    },
  ],
  [
    {
      label: "Blood Group",
      name: "bloodGroup",
      options: [
        "A+",
        "A-",
        "B+",
        "B-",
        "AB+",
        "AB-",
        "O+",
        "O-"
      ],
      type: "select",
    },
    {
      label: "Alternate Mobile Number",
      options: ["+91", "+92", "+93"],
      name: "alternateMobileNumber",
      inputName: "number",
      dropdownName: "countryCode",
      type: "inputdropdown",
    },
  ],
  [
    {
      label: "Pincode",
      name: "pincode",
      type: "text",
    },
  ],
  [
  {
    label:"State",
    name:"state",
    options: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal"
    ],
    type:"select",
  },
  {
    label:"District",
    name:"district",
    options:[], // This will be dynamically populated
    type:"select",
    dependsOn: "state",
    // getOptions: (formData) => formData.state && stateDistrictMap[formData.state] ? stateDistrictMap[formData.state] : []
    getOptions: (formData) => (formData && formData.state && stateDistrictMap[formData.state]) ? stateDistrictMap[formData.state] : []

    
  },
  ],
  
  {
    label: "Address",
    name: "address",
    type: "textarea",
  },
  [
    {
      label: "Designation",
      name: "designation",
      type: "select",
      options: ["Doctor", "Nurse","staff"],
    },
    {
      label: "Upload Photo",
      name: "photo",
      type: "file",
      title: "Upload Image",
    },
  ],
  [
    {
      label: "Joining Date",
      name: "joiningDate",
      type: "date",
    },
    {
      label: "Reliving Date",
      name: "relivingDate",
      type: "date",
    },
    {
      label: "Timing",
      name:"timing",
      type: "dynamic",
      field: [
          // {
          //     label: "Day",
          //     name: "day",
          //     type: "text",
          // },
          {
              label:"Day",
              name:"day",
              options:['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
              type:"select"
          },
          {
              label: "Status",
              name: "status",
              type: "select",
              options: ["Working", "Off"]
          },
          {
              label: "From",
              name: "startTime",
              type: "time"
          },
          {
              label: "To",
              name: "endTime",
              type: "time"
          }
      ]
    }
  ],
];

export const staffTableValue = [
  {
    id: "21414",
    staffId: "323252",
    staffName: "John Doe",
    phoneNumber: "dasgasgasga",
    bloodGroup: "A+",
    gender: "Male",
    designation: "Emergency",
  },
  {
    id: "214145",
    staffId: "323252",
    staffName: "John Doe",
    phoneNumber: "dasgasgasga",
    bloodGroup: "A+",
    gender: "Male",
    designation: "Emergency",
  },
  {
    id: "214146",
    staffId: "323252",
    staffName: "John Doe",
    phoneNumber: "dasgasgasga",
    bloodGroup: "A+",
    gender: "Male",
    designation: "Emergency",
  },
];

export const staffPreviewField = [
  {
    icon: "staffIcon",
    head: [
      {
        title: "Staff ID",
        name1: "userId",
        name2: "id",
        isNested:true
      },
    ],
    fields: [
      {
        label: "Staff Name",
        name1: "userId",
        name2: "name",
        isNested:true
      },
      {
        label: "Address",
        name1: "userId",
        name2: "address",
        isNested:true
      },
      {
        label: "Age",
        name1: "userId",
        name2: "age",
        isNested:true
      },
      {
        label: "Phone Number",
        name1: "userId",
        name2: "mobileNumber",
        name3: "number",
        isDoubleNested:true
      },
      {
        label: "Gender",
        name1: "userId",
        name2: "gender",
        isNested:true
      },
      {
        label: "Alternate Mobile Number",
        name1: "userId",
        name2: "alternateMobileNumber",
        name3: "number",
        isDoubleNested:true
      },
      {
        label: "Blood Group",
        name1: "userId",
        name2: "bloodGroup",
        isNested:true
      },
    ],
    image: {
      name: "doctorImage",
    },
    isStaff: true,
    staffInfo: [
      {
        title: "Joining Date",
        name: "joiningDate",
      },
      {
        title: "Reliving Date",
        name: "relivingDate",
      },
    ],
  },
];

