import type {
  FormDataType,
  ValidateInputsType,
} from "../types/ValidateFormType";

export const validateForm = ({ formData, newErrors }: FormDataType) => {
  const lettersRegex = /^[A-Za-z\s]+$/;
  const numbersRegex = /^\d+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate First Name and Last Name
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const position = formData.get("position") as string;
  const experience = formData.get("experience") as string;

  validateName({ firstName, lastName, regex: lettersRegex, newErrors });
  validatePosition({ position, regex: lettersRegex, newErrors });
  validateExperience({ experience, regex: numbersRegex, newErrors });
  validateEmail({ email, regex: emailRegex, newErrors });

  return newErrors;
};

const validateName = ({
  firstName,
  lastName,
  regex,
  newErrors,
}: Omit<ValidateInputsType, "email" | "position" | "experience">) => {
  if (!firstName || firstName.length < 2) {
    newErrors.firstName = "Enter a valid First Name";
  } else if (regex && !regex.test(firstName)) {
    newErrors.firstName = "First Name can only contain letters and spaces";
  }
  if (!lastName || lastName.length < 2) {
    newErrors.lastName = "Enter a valid Last Name";
  } else if (regex && !regex.test(lastName)) {
    newErrors.lastName = "Last Name can only contain letters and spaces";
  }
};

const validatePosition = ({
  position,
  regex,
  newErrors,
}: Pick<ValidateInputsType, "position" | "regex" | "newErrors">) => {
  if (!position || position.length < 2) {
    newErrors.position = "Enter a valid Position";
  } else if (regex && !regex.test(position)) {
    newErrors.position = "Position can only contain letters and spaces";
  }
};

const validateExperience = ({
  experience,
  regex,
  newErrors,
}: Pick<ValidateInputsType, "experience" | "regex" | "newErrors">) => {
  if (!experience) {
    newErrors.experience = "Experience is required";
  } else if (regex && !regex.test(experience)) {
    newErrors.experience = "Experience must be a valid number";
  } else if (Number(experience) < 0 || Number(experience) > 50) {
    newErrors.experience = "Enter numbers between 0 and 50 years";
  }
};

const validateEmail = ({
  email,
  regex,
  newErrors,
}: Pick<ValidateInputsType, "email" | "regex" | "newErrors">) => {
  if (!email) {
    newErrors.email = "Email is required";
  } else if (regex && !regex.test(email)) {
    newErrors.email = "Email is not valid";
  }
};
