const Que = require('@models/que');
const axios = require('axios');
const { loadBalancer, SYSTEM_TOKEN ,teacher,student} = require('@config');
const getStudent = async (sid_userId) => {
  try {
    const config = {
      method: 'get',
      url: `${student}/sts/apis/v1/user/${sid_userId}`,
      headers: {
        app_name: 'studentApp',
        app_version_code: '101',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SYSTEM_TOKEN}`,
      },
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    console.error('Error fetching student data:', error.message);
    return null;
  }
};
// Function to make a GET request to retrieve teacher information
const getTeacher = async (args) => {
  try {
    const { className, subject, studentid } = args;
    
    const url = `${teacher}/tms/apis/v1/searchforinstance?className=${className}&subject=${subject}&studentid=${studentid}`;

    const config = {
      method: 'get',
      url: url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SYSTEM_TOKEN}`,
      },
    };

    const result = await axios(config);

    // Check if data is present in the result
    return result?.data || null;
  } catch (error) {
    console.error(error);
    // Handle error appropriately, e.g., throw a custom error
    throw new Error('Failed to fetch teacher information');
  }
};

// Function to create an exam question
const createQue = async (queData) => {
  try {
    // Extract relevant data from queData
    const { class: className, sub: subject, lang, studnetid: studentid } = queData;

    // Construct args object for the getTeacher function
    const teacherArgs = { className, subject, studentid };

    // Fetch teacher information
    const teacherInfo = await getTeacher(teacherArgs);

    console.log('Teacher Information:', teacherInfo.data);
    if(teacherInfo.data=="No teachers found")
    {
  return "no active teacher";
    }
    const userIds = teacherInfo.data.map(obj => obj.userId);
//     console.log('User Ids:', userIds)
// if(userIds==null||userIds.length==0||userIds==undefined)
// {
//     const createdQue = await Que.create(queData);
//   return "no active teacher";
// }
// let n= userIds.length;
// // for(let i=0; i<n; i++){
// const req_teacherid = userIds.map(teacherid => ({ teacherid, status: 'requested', flag: true }));

    // Assign req_teacherid to queData

     if (!userIds || userIds.length === 0) {
      const createdQue = await Que.create(queData);
      return "no active teacher";
    }
    const n = userIds.length;
    const req_teacherid = userIds.map(teacherid => ({ teacherid, status: 'requested', flag: true }));
    // Add name and profileimage to each req_teacherid element
    for (let i = 0; i < n; i++) {
      const teacherId = userIds[i];
      const abc = await getStudent(studentid);
      const name = abc.data[0].personalDetails?.first_name;
      const profileimage = abc.data[0].personalDetails?.profileImage;
      queData.name=name;
      queData.profileimage=profileimage;
      // const matchingReqTeacherId = req_teacherid.find(reqTeacherId => reqTeacherId.teacherid === teacherId);
      // if (matchingReqTeacherId) {
      //   matchingReqTeacherId.name = name;
      //   matchingReqTeacherId.profileimage = profileimage;
      // }
    }
    queData.req_teacherid = req_teacherid;
const createdQue = await Que.create(queData);
// }
    // Create the exam question
    

    return createdQue;
  } catch (error) {
    console.error(error);
    // Handle error appropriately, e.g., throw a custom error
    throw new Error('Failed to create exam question');
  }
};

module.exports = {
  createQue,
};
