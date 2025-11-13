export const checkValidData = (email, password,name) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 6; 
    const isnameValid = name !== null && name.trim().length > 0;

    if(name !== null){
        if(!isnameValid) return "Name cannot be empty";
    }
    
    if(!isEmailValid) return "email id is not valid";
    if(!isPasswordValid) return "Password is not valid";// Example: Password should be at least 6 characters long

    return null;
}   