import React, { useEffect, useState } from 'react';
import Subject from './Subject';
import { server } from '@/pages/index.js';
import axios from 'axios';

const MainSubjectScreen = () => {
  const [subjects, setSubjects] = useState([]);

  // Fetching all available subjects
  useEffect(() => {
    axios.get(`${server}/api/fetchSubjects`, {}).then((res) => {
      setSubjects(res.data.subjects);
    }).catch((e) => {
      console.log(e.response.data.message);
    });
  }, []);

  return (
    <div className="bg-slate-100 mx-4 rounded-xl w-3/4">
      <div className="p-4 text-4xl text-center">
        All courses
      </div>
      <Divider />
      {/* Map through the subjects and render each Subject component */}
      <div className="mt-4 h-[81vh] flex flex-col p-4 overflow-auto overflow-x-hidden overflow-y-auto">
        {subjects.map(subject => (
          <Subject key={subject._id} subjectName={subject.subjectName} arenas={subject.arenas} />
        ))}
      </div>
    </div>
  );
}

const Divider = () => <hr className="h-1.5 rounded-xl mx-4 bg-slate-300" />;

export default MainSubjectScreen;
