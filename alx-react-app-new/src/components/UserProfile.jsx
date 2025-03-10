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
src/components/UserProfile.jsx doesn't contain: ["span", "style", "color", "border", "padding", "margin", "solid", "blue", "10px"]
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
};

export default UserProfile;
