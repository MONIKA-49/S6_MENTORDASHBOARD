// Mock Database System for AI Mentor Dashboard

const initialDB = {
  Users: [
{ id: 'admin1', name: 'System Admin', email: 'moniikasekar@gmail.com', password: 'admin', role: 'Admin' },
    { id: 'student1', name: 'Monika S', email: 'monika.ee23@bitsathy.ac.in', password: 'student', role: 'Student' },
    { id: 'm_cl30', name: 'Dr. CHINNADURRAI CL', email: 'monikakumutha88@gmail.com', password: 'mentor', role: 'Mentor' },
    { id: 'stu_7376231EE102', name: 'ABINISHA S', email: '7376231ee102@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE103', name: 'ANANTHIKA A', email: '7376231ee103@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE105', name: 'ANUJA N', email: '7376231ee105@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE106', name: 'ARUN BHAGAVATH S', email: '7376231ee106@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE107', name: 'ARUNIKA T K', email: '7376231ee107@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE108', name: 'BALAJI M J', email: '7376231ee108@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE109', name: 'BHARANIDHARAN S', email: '7376231ee109@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE110', name: 'DEEPTHI A', email: '7376231ee110@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE113', name: 'DHARSHINI M', email: 'dharsdhini.ee23@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE114', name: 'DHILIP M V', email: '7376231ee114@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE115', name: 'DHIVA R', email: '7376231ee115@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE116', name: 'GOWTHAM M', email: '7376231ee116@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE117', name: 'GOWTHAM T', email: '7376231ee117@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE118', name: 'HARIKRISHNA N', email: '7376231ee118@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE119', name: 'HARINI K S', email: '7376231ee119@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE120', name: 'JANANI N', email: '7376231ee120@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE121', name: 'JEBASTIN JOSEPH PAUL J', email: '7376231ee121@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE122', name: 'JEEVITHA S', email: '7376231ee122@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE123', name: 'KAMALESH A P', email: '7376231ee123@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'm_t68', name: 'Dr. ALEX STANLEY RAJA T', email: 'm_t68@edu.in', password: 'password', role: 'Mentor' },
    { id: 'stu_7376231EE124', name: 'KAMALESH VARMA V G', email: '7376231ee124@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE125', name: 'KATHIR NITHESH R', email: '7376231ee125@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE126', name: 'KAVITHA M', email: '7376231ee126@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE127', name: 'KAVIYARASU V K', email: '7376231ee127@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE128', name: 'KEERTHISANKAR S', email: '7376231ee128@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE129', name: 'KEERTHIVASAN S', email: '7376231ee129@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE130', name: 'KHAJA PARVEZ T', email: '7376231ee130@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE131', name: 'KIRUBA O C', email: '7376231ee131@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE132', name: 'KOWSHIK ARAVIND K S P', email: '7376231ee132@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE133', name: 'MANEESH D', email: '7376231ee133@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE134', name: 'MATHIYARASI K', email: '7376231ee134@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE135', name: 'MAURYA A S', email: '7376231ee135@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE136', name: 'MITHUN P P', email: '7376231ee136@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE137', name: 'MOHAN PRASANTH N', email: '7376231ee137@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE138', name: 'MONIKA S', email: '7376231ee138@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE139', name: 'MONISHWARAN R', email: '7376231ee139@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE140', name: 'NIKILESHKUMAR S', email: '7376231ee140@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE142', name: 'PRANAV T S S', email: '7376231ee142@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE143', name: 'PRAVIN RAJ P', email: '7376231ee143@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE144', name: 'PUNITHA S', email: '7376231ee144@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE145', name: 'RAGUPATHI M', email: '7376231ee145@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'm_j67', name: 'Mrs. MADHUMITHA J', email: 'm_j67@edu.in', password: 'password', role: 'Mentor' },
    { id: 'stu_7376231EE146', name: 'RAJA PRADEEPA R', email: '7376231ee146@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE147', name: 'ROHITH M', email: '7376231ee147@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE148', name: 'SANTHIYA V', email: '7376231ee148@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE150', name: 'SARAN R', email: '7376231ee150@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE151', name: 'SARVESH K', email: '7376231ee151@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE152', name: 'SHREE SUBI G', email: '7376231ee152@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE153', name: 'SIVA P', email: '7376231ee153@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE154', name: 'SOWKANDHIKA M', email: '7376231ee154@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE155', name: 'SRI BALAJI S', email: '7376231ee155@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE156', name: 'SUBASRI N', email: '7376231ee156@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE157', name: 'THARUNYA S T', email: '7376231ee157@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE160', name: 'VISHNUTHARAN K', email: '7376231ee160@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376231EE161', name: 'YUVASHRI J', email: '7376231ee161@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE501', name: 'JEEVA PRAKASH S', email: '7376241ee501@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE502', name: 'KANISHK S J', email: '7376241ee502@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE503', name: 'RANJITH R', email: '7376241ee503@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE504', name: 'SELVA LATHISH S', email: '7376241ee504@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE505', name: 'VASUKI A S', email: '7376241ee505@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE506', name: 'VELU PRABHAKARAN M', email: '7376241ee506@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE507', name: 'AARTHI M', email: '7376241ee507@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE508', name: 'ABINAYA V', email: '7376241ee508@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE509', name: 'AJITH KUMAR N', email: '7376241ee509@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE510', name: 'AKASH R', email: '7376241ee510@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE511', name: 'BHARATH M', email: '7376241ee511@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE512', name: 'DEEPAK S', email: '7376241ee512@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE513', name: 'DHARANI K', email: '7376241ee513@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE514', name: 'DIVYA P', email: '7376241ee514@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE515', name: 'GOKUL H', email: '7376241ee515@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE516', name: 'HARIHARAN M', email: '7376241ee516@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE517', name: 'JAYASURYA S', email: '7376241ee517@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE518', name: 'KAMAL P', email: '7376241ee518@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE519', name: 'KARTHIGAN R', email: '7376241ee519@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE520', name: 'KAVIN M', email: '7376241ee520@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE521', name: 'LOGESH S', email: '7376241ee521@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE522', name: 'MALATHI N', email: '7376241ee522@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE523', name: 'MUKESH T', email: '7376241ee523@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE524', name: 'NAVIN S R', email: '7376241ee524@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE525', name: 'PRADEEP V', email: '7376241ee525@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE526', name: 'RAMYA B', email: '7376241ee526@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE527', name: 'SANTHOSH KUMAR D', email: '7376241ee527@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE528', name: 'SNEHA P', email: '7376241ee528@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE529', name: 'SUDHAKAR V', email: '7376241ee529@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE530', name: 'THILAGAVATHI M', email: '7376241ee530@bitsathy.ac.in', password: 'password', role: 'Student' },
    { id: 'stu_7376241EE531', name: 'VIGNESH S', email: '7376241ee531@bitsathy.ac.in', password: 'password', role: 'Student' }
  ],
  Students: [
    { id: 'student2', name: 'John Doe', reg_no: '7376231EC022', dept: 'Electronics', year: '3', mentor_id: 'm_t68', cgpa: 7.2, remarks: 'Needs to focus more on core subjects', skills: 'C++, IoT, Arduino' },
    { id: 'stu_7376231EE102', name: 'ABINISHA S', reg_no: '7376231EE102', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 7.5, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE103', name: 'ANANTHIKA A', reg_no: '7376231EE103', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 7.4, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE105', name: 'ANUJA N', reg_no: '7376231EE105', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 7.3, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE106', name: 'ARUN BHAGAVATH S', reg_no: '7376231EE106', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 6.4, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE107', name: 'ARUNIKA T K', reg_no: '7376231EE107', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 9.3, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE108', name: 'BALAJI M J', reg_no: '7376231EE108', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 7, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE109', name: 'BHARANIDHARAN S', reg_no: '7376231EE109', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 8.1, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE110', name: 'DEEPTHI A', reg_no: '7376231EE110', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 7.6, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE113', name: 'DHARSHINI M', reg_no: '7376231EE113', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 8.9, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE114', name: 'DHILIP M V', reg_no: '7376231EE114', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 8.4, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE115', name: 'DHIVA R', reg_no: '7376231EE115', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 7.9, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE116', name: 'GOWTHAM M', reg_no: '7376231EE116', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 6.7, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE117', name: 'GOWTHAM T', reg_no: '7376231EE117', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 6.6, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE118', name: 'HARIKRISHNA N', reg_no: '7376231EE118', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 6.3, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE119', name: 'HARINI K S', reg_no: '7376231EE119', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 6.3, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE120', name: 'JANANI N', reg_no: '7376231EE120', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 6.6, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE121', name: 'JEBASTIN JOSEPH PAUL J', reg_no: '7376231EE121', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 9.3, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE122', name: 'JEEVITHA S', reg_no: '7376231EE122', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 6.6, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE123', name: 'KAMALESH A P', reg_no: '7376231EE123', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 6.8, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE124', name: 'KAMALESH VARMA V G', reg_no: '7376231EE124', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 8.4, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE125', name: 'KATHIR NITHESH R', reg_no: '7376231EE125', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 6.1, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE126', name: 'KAVITHA M', reg_no: '7376231EE126', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 8.5, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE127', name: 'KAVIYARASU V K', reg_no: '7376231EE127', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 7, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE128', name: 'KEERTHISANKAR S', reg_no: '7376231EE128', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 8.6, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE129', name: 'KEERTHIVASAN S', reg_no: '7376231EE129', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 6.2, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE130', name: 'KHAJA PARVEZ T', reg_no: '7376231EE130', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 8.8, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE131', name: 'KIRUBA O C', reg_no: '7376231EE131', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 6.6, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE132', name: 'KOWSHIK ARAVIND K S P', reg_no: '7376231EE132', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 8.3, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE133', name: 'MANEESH D', reg_no: '7376231EE133', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 7, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE134', name: 'MATHIYARASI K', reg_no: '7376231EE134', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 6.1, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE135', name: 'MAURYA A S', reg_no: '7376231EE135', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 7.3, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE136', name: 'MITHUN P P', reg_no: '7376231EE136', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 7.5, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE137', name: 'MOHAN PRASANTH N', reg_no: '7376231EE137', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 7.8, remarks: 'Good progress', skills: 'C, Python, Electrical' },
{ id: 'student1', name: 'Monika S', reg_no: '7376231EE138', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 9.1, remarks: 'Excellent progress', skills: 'JavaScript, UI/UX, Python' },
    { id: 'stu_7376231EE138', name: 'MONIKA S', reg_no: '7376231EE138', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 9.1, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE139', name: 'MONISHWARAN R', reg_no: '7376231EE139', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 9.5, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE140', name: 'NIKILESHKUMAR S', reg_no: '7376231EE140', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 7, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE142', name: 'PRANAV T S S', reg_no: '7376231EE142', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 7, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE143', name: 'PRAVIN RAJ P', reg_no: '7376231EE143', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 9.4, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE144', name: 'PUNITHA S', reg_no: '7376231EE144', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 7.5, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE145', name: 'RAGUPATHI M', reg_no: '7376231EE145', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 7, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE146', name: 'RAJA PRADEEPA R', reg_no: '7376231EE146', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 8.5, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE147', name: 'ROHITH M', reg_no: '7376231EE147', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 6.6, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE148', name: 'SANTHIYA V', reg_no: '7376231EE148', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 9.1, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE150', name: 'SARAN R', reg_no: '7376231EE150', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 6.6, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE151', name: 'SARVESH K', reg_no: '7376231EE151', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 6.9, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE152', name: 'SHREE SUBI G', reg_no: '7376231EE152', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 7.8, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE153', name: 'SIVA P', reg_no: '7376231EE153', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 6.3, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE154', name: 'SOWKANDHIKA M', reg_no: '7376231EE154', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 6.6, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE155', name: 'SRI BALAJI S', reg_no: '7376231EE155', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 8.9, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE156', name: 'SUBASRI N', reg_no: '7376231EE156', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 8.4, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE157', name: 'THARUNYA S T', reg_no: '7376231EE157', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 6, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE160', name: 'VISHNUTHARAN K', reg_no: '7376231EE160', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 8.8, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376231EE161', name: 'YUVASHRI J', reg_no: '7376231EE161', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 6.5, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE501', name: 'JEEVA PRAKASH S', reg_no: '7376241EE501', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 7.4, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE502', name: 'KANISHK S J', reg_no: '7376241EE502', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 9, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE503', name: 'RANJITH R', reg_no: '7376241EE503', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 9.1, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE504', name: 'SELVA LATHISH S', reg_no: '7376241EE504', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 9.4, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE505', name: 'VASUKI A S', reg_no: '7376241EE505', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 8.6, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE506', name: 'VELU PRABHAKARAN M', reg_no: '7376241EE506', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 7, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE507', name: 'AARTHI M', reg_no: '7376241EE507', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 8.2, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE508', name: 'ABINAYA V', reg_no: '7376241EE508', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 7.9, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE509', name: 'AJITH KUMAR N', reg_no: '7376241EE509', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 6.8, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE510', name: 'AKASH R', reg_no: '7376241EE510', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 9.1, remarks: 'Excellent progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE511', name: 'BHARATH M', reg_no: '7376241EE511', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 7.4, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE512', name: 'DEEPAK S', reg_no: '7376241EE512', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 8.5, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE513', name: 'DHARANI K', reg_no: '7376241EE513', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 6.2, remarks: 'Needs to focus more on core subjects', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE514', name: 'DIVYA P', reg_no: '7376241EE514', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 8.8, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE515', name: 'GOKUL H', reg_no: '7376241EE515', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 7.7, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE516', name: 'HARIHARAN M', reg_no: '7376241EE516', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 6.9, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE517', name: 'JAYASURYA S', reg_no: '7376241EE517', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 7.1, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE518', name: 'KAMAL P', reg_no: '7376241EE518', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 8.3, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE519', name: 'KARTHIGAN R', reg_no: '7376241EE519', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 7.6, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE520', name: 'KAVIN M', reg_no: '7376241EE520', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 9.4, remarks: 'Excellent progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE521', name: 'LOGESH S', reg_no: '7376241EE521', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 6.5, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE522', name: 'MALATHI N', reg_no: '7376241EE522', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 8.1, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE523', name: 'MUKESH T', reg_no: '7376241EE523', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 7.3, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE524', name: 'NAVIN S R', reg_no: '7376241EE524', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 8.6, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE525', name: 'PRADEEP V', reg_no: '7376241EE525', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 6.4, remarks: 'Needs to focus more on core subjects', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE526', name: 'RAMYA B', reg_no: '7376241EE526', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 9.0, remarks: 'Excellent progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE527', name: 'SANTHOSH KUMAR D', reg_no: '7376241EE527', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 7.8, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE528', name: 'SNEHA P', reg_no: '7376241EE528', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 8.7, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE529', name: 'SUDHAKAR V', reg_no: '7376241EE529', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_cl30', cgpa: 7.2, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE530', name: 'THILAGAVATHI M', reg_no: '7376241EE530', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_t68', cgpa: 6.7, remarks: 'Good progress', skills: 'C, Python, Electrical' },
    { id: 'stu_7376241EE531', name: 'VIGNESH S', reg_no: '7376241EE531', dept: 'Electrical Engineering', year: '3', mentor_id: 'm_j67', cgpa: 8.9, remarks: 'Good progress', skills: 'C, Python, Electrical' }
  ],
  Mentors: [
    { id: 'm_cl30', name: 'Dr. CHINNADURRAI CL', dept: 'Electrical Engineering' },
    { id: 'm_t68', name: 'Dr. ALEX STANLEY RAJA T', dept: 'Electrical Engineering' },
    { id: 'm_j67', name: 'Mrs. MADHUMITHA J', dept: 'Electrical Engineering' }
  ],
  Tasks: [
    { id: 't1', title: 'Complete Dashboard UI', description: 'Finish the CSS layout for the admin panel.', deadline: '2026-04-10', student_id: 'student1', status: 'Pending' },
    { id: 't2', title: 'Submit Project Report', description: 'Upload the final PDF for review.', deadline: '2026-04-12', student_id: 'student1', status: 'Completed' }
  ],
  Attendance: [
    { id: 'a1', student_id: 'student1', percentage: 95 },
    { id: 'a2', student_id: 'student2', percentage: 82 }
  ],
  Marks: [
    { id: 'mk1', student_id: 'student1', subject: 'Circuit Theory', mark: 92 },
    { id: 'mk2', student_id: 'student1', subject: 'Microprocessors', mark: 88 },
    { id: 'mk3', student_id: 'student1', subject: 'Electromagnetic Fields', mark: 85 },
    { id: 'mk4', student_id: 'student1', subject: 'Power Systems', mark: 90 },
    { id: 'mk5', student_id: 'student1', subject: 'Control Systems', mark: 89 },
    { id: 'mk6', student_id: 'student1', subject: 'Electrical Machines', mark: 94 }
  ],
  Meetings: [
    { id: 'mt1', mentor_id: 'm_cl30', student_id: 'student1', date: '2026-04-15T10:00', notes: 'Monthly Review' }
  ],
  Messages: [
    { id: 'msg1', sender_id: 'm_cl30', receiver_id: 'student1', message: 'Welcome to the platform! Please update your profile.', timestamp: new Date().toISOString() }
  ],
  RemarksTimeline: [
    { id: 'rem1', student_id: 'student1', mentor_id: 'm_t68', text: 'Excellent progress', date: new Date().toISOString() }
  ],
  Projects: [
    { id: 'proj1', student_id: 'student1', title: 'Core Mini Project', progress: 65 }
  ],
  Leaves: [
    { id: 'lv1', student_id: 'student1', mentor_id: 'm_j67', fromDate: '2026-04-12', toDate: '2026-04-14', reason: 'Fever', status: 'Pending' }
  ],
  Assessments: [],
  Fees: [
    { id: 'f1', student_id: 'student1', total: 150000, paid: 120000, due: 30000, dueDate: '2026-05-01', status: 'Pending' },
    { id: 'f2', student_id: 'student2', total: 150000, paid: 150000, due: 0, dueDate: '2026-05-01', status: 'Paid' },
    { id: 'f_dharshini', student_id: 'stu_7376231EE113', total: 150000, paid: 120000, due: 30000, dueDate: '2026-05-01', status: 'Pending' }
  ],
  Config: {
    departments: ['Computer Science', 'Electrical Engineering', 'Electronics', 'Information Technology'],
    years: ['1', '2', '3', '4']
  }
};

// --- AUTO-GENERATE MISSING MOCK DATA ---
// Auto-fill missing attendance in initialDB
let initAttIds = initialDB.Attendance.map(a => a.student_id);
initialDB.Students.forEach(stu => {
  if (!initAttIds.includes(stu.id)) {
    initialDB.Attendance.push({
      id: 'a_' + stu.id + '_' + Math.floor(Math.random() * 1000),
      student_id: stu.id,
      percentage: Math.floor(Math.random() * 21) + 75 // 75% to 95%
    });
  }
});

// Initialize DB in localStorage if not exists
if (!localStorage.getItem('mentorAppDB')) {
  localStorage.setItem('mentorAppDB', JSON.stringify(initialDB));
} else {
  // Patch logic for missing structures in previous sessions
  let existing = JSON.parse(localStorage.getItem('mentorAppDB'));
  let altered = false;
  existing.Students.sort((a,b) => (a.reg_no || '').localeCompare(b.reg_no || ''));
  existing.Users = initialDB.Users;
  altered = true; // force save of sorted order
  
  if (existing.Students.length < initialDB.Students.length) {
    existing.Students = initialDB.Students;
    existing.Users = initialDB.Users;
    altered = true;
  }
  
  // Patch to ensure Monika's email is updated to monika.ee23@bitsathy.ac.in
  const st1 = existing.Users.find(u => u.id === 'student1');
  if (st1 && st1.email !== 'monika.ee23@bitsathy.ac.in') {
      st1.email = 'monika.ee23@bitsathy.ac.in';
      altered = true;
  }
  const ad1 = existing.Users.find(u => u.id === 'admin1');
  if (ad1 && ad1.email !== 'moniikasekar@gmail.com') {
      ad1.email = 'moniikasekar@gmail.com';
      ad1.password = 'admin';
      altered = true;
  }
  const mt1 = existing.Users.find(u => u.id === 'm_cl30');
  if (mt1 && mt1.email !== 'monikakumutha88@gmail.com') {
      mt1.email = 'monikakumutha88@gmail.com';
      mt1.password = 'mentor';
      altered = true;
  }
  const dh1 = existing.Users.find(u => u.id === 'stu_7376231EE113');
  if (dh1 && dh1.email !== 'dharsdhini.ee23@bitsathy.ac.in') {
      dh1.email = 'dharsdhini.ee23@bitsathy.ac.in';
      altered = true;
  }

  // Patch missing attendance in existing local DB
  if(!existing.Attendance) {
    existing.Attendance = initialDB.Attendance;
    altered = true;
  } else {
    let existAttIds = existing.Attendance.map(a => a.student_id);
    let newAttAdded = false;
    existing.Students.forEach(stu => {
      if (!existAttIds.includes(stu.id)) {
        existing.Attendance.push({
          id: 'a_' + stu.id + '_' + Math.floor(Math.random() * 1000),
          student_id: stu.id,
          percentage: Math.floor(Math.random() * 21) + 75 // 75% to 95%
        });
        newAttAdded = true;
      }
    });
    if (newAttAdded) altered = true;
  }
  
  if(!existing.Config) {
    existing.Config = initialDB.Config;
    altered = true;
  }
  if(!existing.RemarksTimeline) {
    existing.RemarksTimeline = initialDB.RemarksTimeline;
    altered = true;
  }
  if(!existing.Projects) {
    existing.Projects = initialDB.Projects || [];
    altered = true;
  }
  if(!existing.Leaves) {
    existing.Leaves = initialDB.Leaves || [];
    altered = true;
  }
  if(!existing.Assessments) {
    existing.Assessments = [];
    altered = true;
  }
  if(!existing.Fees) {
    existing.Fees = initialDB.Fees || [];
    altered = true;
  }
  
  // Force patch Marks to have 6 subjects for existing sessions
  if(existing.Marks && existing.Marks.length < 6) {
    existing.Marks = initialDB.Marks;
    altered = true;
  }

  // Patch missing fee for Dharshini
  if (existing.Fees) {
      const dharshiniFee = existing.Fees.find(f => f.student_id === 'stu_7376231EE113');
      if (!dharshiniFee) {
          existing.Fees.push({ id: 'f_dharshini', student_id: 'stu_7376231EE113', total: 150000, paid: 120000, due: 30000, dueDate: '2026-05-01', status: 'Pending' });
          altered = true;
      }
  }

  if(altered) {
    localStorage.setItem('mentorAppDB', JSON.stringify(existing));
  }
}

function getDB() {
  return JSON.parse(localStorage.getItem('mentorAppDB'));
}

function setDB(db) {
  localStorage.setItem('mentorAppDB', JSON.stringify(db));
}

// --- AUTHENTICATION LOGIC ---

function login(email, password, role) {
  const db = getDB();
  // Role string matches exactly the values defined in initialDB ('Admin', 'Mentor', 'Student')
  const user = db.Users.find(u => u.email === email && u.password === password && u.role === role);
  
  if (user) { 
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    if (user.role === 'Admin') window.location.href = 'admin-dashboard.html';
    if (user.role === 'Mentor') window.location.href = 'mentor-dashboard.html';
    if (user.role === 'Student') window.location.href = 'student-dashboard.html';
    return true;
  }
  return false;
}

function googleLogin(email) {
  const db = getDB();
  const user = db.Users.find(u => u.email.toLowerCase() === email.toLowerCase());
  
  if (user) { 
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    if (user.role === 'Admin') window.location.href = 'admin-dashboard.html';
    if (user.role === 'Mentor') window.location.href = 'mentor-dashboard.html';
    if (user.role === 'Student') window.location.href = 'student-dashboard.html';
    return true;
  }
  return false;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

function getCurrentUser() {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
}

function checkAuth(requiredRole) {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = 'index.html';
    return null;
  }
  if (requiredRole && user.role !== requiredRole) {
    alert('Unauthorized access');
    window.location.href = 'index.html';
    return null;
  }
  
  // Auto-Warning Engine
  if (user.role === 'Student') {
    const db = getDB();
    const stu = db.Students.find(s => s.id === user.id || s.email === user.email);
    if(stu) {
      const at = db.Attendance.find(a => a.student_id === stu.id);
      if(at && at.percentage < 75) {
         // Auto insert systemic warning msg if none recent exists
         const warnMsg = "SYSTEM ALERT: Your attendance is dangerously low (" + at.percentage + "%). Please see your mentor.";
         const hasWarned = db.Messages.find(m => m.receiver_id === stu.id && m.message === warnMsg);
         if(!hasWarned) {
             db.Messages.push({ id:'sys'+Date.now(), sender_id:'admin', receiver_id:stu.id, message: warnMsg, timestamp: new Date().toISOString() });
             setDB(db);
         }
      }
    }
  }

  return user;
}

// Sidebar Setup Helper
function setupSidebar() {
  const user = getCurrentUser();
  if(!user) return;
  const usernameEls = document.querySelectorAll('.sidebar-username');
  usernameEls.forEach(el => el.textContent = user.name);
}

// --- THEME LOGIC ---
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('mentorAppTheme', newTheme);
  updateThemeIcon(newTheme);
}

function initTheme() {
  const savedTheme = localStorage.getItem('mentorAppTheme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupSidebar();
  // Attach global logout
  document.querySelectorAll('.logout-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      logout();
    });
  });

  // Overall Leaderboard and Calendar init (if containers exist in view)
  setTimeout(() => {
    if(document.getElementById('student-leaderboard-table')) {
      populateGlobalLeaderboard('student-leaderboard-table');
    }
    if(document.getElementById('calendar-days')) {
      renderCalendar('calendar-days');
    }
    if(document.getElementById('mentor-calendar-days')) {
      renderCalendar('mentor-calendar-days');
    }
    if(document.getElementById('mentor-attendance-table')) {
      populateMentorAttendance();
    }
  }, 500);

  // Remedial Automation Hook
  runDailyAutomation();
});

// Mock Ballot Questions
const MOCK_MQS = [
  {q: "What is the primary function of an operating system?", opts: ["Memory Management", "Word Processing", "Web Browsing", "Database Storage"], ans: 0},
  {q: "Which protocol is used for secure web browsing?", opts: ["HTTP", "FTP", "HTTPS", "SMTP"], ans: 2},
  {q: "In Object Oriented Programming, what does 'Inheritance' mean?", opts: ["Code duplication", "Acquiring properties of another class", "Data hiding", "Memory allocation"], ans: 1},
  {q: "What is the time complexity of binary search?", opts: ["O(n)", "O(n^2)", "O(log n)", "O(1)"], ans: 2},
  {q: "Which data structure uses LIFO?", opts: ["Queue", "Tree", "Graph", "Stack"], ans: 3},
  {q: "What does SQL stand for?", opts: ["Structured Query Language", "Strong Question Language", "System Query Language", "Structured Quick Language"], ans: 0},
  {q: "In networks, what operates at Layer 3 of the OSI model?", opts: ["Switch", "Router", "Hub", "Cable"], ans: 1},
  {q: "Which of the following is a NoSQL database?", opts: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], ans: 2},
  {q: "What is a primary key in a database?", opts: ["A key to encrypt data", "A unique identifier for a record", "A master password", "A foreign identifier"], ans: 1},
  {q: "Which algorithm is used for finding shortest paths?", opts: ["Bubble Sort", "Dijkstra's Algorithm", "Binary Search", "Hash Function"], ans: 1}
];

function runDailyAutomation() {
  const db = getDB();
  const today = new Date().toISOString().split('T')[0];
  let updated = false;

  db.Students.forEach(stu => {
    let cgpa = parseFloat(stu.cgpa);
    if(cgpa < 6.5) {
       // Check if test exists for today
       const hasTest = db.Assessments.some(a => a.student_id === stu.id && a.date === today);
       if(!hasTest) {
          db.Assessments.push({
             id: 'test_' + Date.now() + Math.random(),
             student_id: stu.id,
             mentor_id: stu.mentor_id,
             date: today,
             status: 'Pending',
             score: null,
             questions: MOCK_MQS
          });
          
          // Notify Student
          if(!db.Messages) db.Messages = [];
          db.Messages.push({
             id: 'sys_' + Date.now() + Math.random(),
             sender_id: 'system',
             receiver_id: stu.id,
             message: '⚠️ AUTO-ASSIGNED: Daily Remedial Test generated due to CGPA threshold trigger.',
             timestamp: new Date().toISOString()
          });

          updated = true;
       }
    }
  });

  if(updated) setDB(db);
}

// --- NEW CAPABILITIES LOGIC ---

function populateGlobalLeaderboard(containerId) {
  const db = getDB();
  const sorted = [...db.Students].sort((a,b) => (parseFloat(b.cgpa||0) - parseFloat(a.cgpa||0)));
  const cont = document.getElementById(containerId);
  if(!cont) return;
  cont.innerHTML = sorted.map((s, idx) => {
    let pts = Math.round(parseFloat(s.cgpa||0) * 120);
    return `<tr>
      <td>#${idx+1}</td>
      <td>${s.reg_no}</td>
      <td>${s.name}</td>
      <td>${s.cgpa || '-'}</td>
      <td>${pts} pts</td>
    </tr>`;
  }).join('');
}

function renderCalendar(containerId) {
  const cont = document.getElementById(containerId);
  if(!cont) return;
  
  let html = '';
  // Mock 35 days grid
  for(let i=1; i<=35; i++) {
    let day = i - 3; // offset
    if(day < 1 || day > 30) {
      html += `<div class="calendar-cell" style="opacity:0.3;"></div>`;
    } else {
      let isToday = day === 15 ? 'today' : '';
      let evts = '';
      if(day === 10) evts += `<div class="calendar-event">Deadline: Assignment</div>`;
      if(day === 15) evts += `<div class="calendar-event">Meeting with Mentor</div>`;
      if(day === 22) evts += `<div class="calendar-event">Mid-Term Review</div>`;
      
      html += `
        <div class="calendar-cell">
          <span class="calendar-date ${isToday}">${day}</span>
          ${evts}
        </div>
      `;
    }
  }
  cont.innerHTML = html;
}

function populateMentorAttendance() {
  const db = getDB();
  const cont = document.getElementById('mentor-attendance-table');
  const user = getCurrentUser();
  if(!cont || !user) return;
  
  const myStudents = db.Students.filter(s => s.mentor_id === user.id);
  cont.innerHTML = myStudents.map(s => {
    const at = db.Attendance.find(a => a.student_id === s.id);
    let pct = at ? at.percentage : 0;
    let badgeClass = pct >= 85 ? 'badge-success' : (pct >= 75 ? 'badge-warning' : 'badge-danger');
    let statusText = pct >= 85 ? 'Safe' : (pct >= 75 ? 'Monitor' : 'Critical');
    return `<tr>
      <td>${s.reg_no}</td>
      <td>${s.name}</td>
      <td>${pct}%</td>
      <td><span class="badge ${badgeClass}">${statusText}</span></td>
    </tr>`;
  }).join('');
}

