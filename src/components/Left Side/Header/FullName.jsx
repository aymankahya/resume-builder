function FullName({ firstName, lastName }) {
  const fullName = firstName || lastName;

  return (
    <h1 className="full-name">
      {fullName
        ? firstName + (lastName ? " " : "") + lastName + "'s Resume"
        : "Untitled"}
    </h1>
  );
}

export default FullName;
