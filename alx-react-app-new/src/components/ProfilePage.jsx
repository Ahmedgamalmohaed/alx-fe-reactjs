import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ name, age, bio }) => {
  return (
    <div>
      <h1>{name}'s Profile</h1>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
};

export default UserProfile;
