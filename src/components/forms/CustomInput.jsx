function CustomInput({ id, type, value, placeholder, ...props }) {
  return (
    <>
      <label htmlFor={id}>{props.children}</label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        ref={props?.ref}
      />
    </>
  );
}

export default CustomInput;
