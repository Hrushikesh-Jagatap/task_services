const Que = require('@models/que');
const axios = require('axios');
const { loadBalancer, SYSTEM_TOKEN ,teacher} = require('@config');

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
    console.log('User Ids:', userIds)
if(userIds==null||userIds.length==0||userIds==undefined)
{
    const createdQue = await Que.create(queData);
  return "no active teacher";
}
let n= userIds.length;
// for(let i=0; i<n; i++){
const req_teacherid = userIds.map(teacherid => ({ teacherid, status: 'requested', flag: true }));

    // Assign req_teacherid to queData
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
