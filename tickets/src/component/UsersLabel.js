import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersLabel = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://your-api-domain.com/user-count');
        setUserCount(response.data.userCount);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="users-label">
      <h3>Number of Users:</h3>
      <p>{userCount}</p>
    </div>
  );
};

export default UsersLabel;