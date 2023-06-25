import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";

const Login: React.FC = () => {
  const handleInputUsernameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("e :>> ", e);
    const username = e.target.value;
    console.log("username :>> ", username);
  };

  return (
    <FormControl isInvalid={false} isRequired>
      <FormLabel>Username</FormLabel>
      <Input onChange={handleInputUsernameChange} type="text" />
      <FormErrorMessage>Error here</FormErrorMessage>
      <FormHelperText></FormHelperText>
      <FormLabel>Country</FormLabel>
      <Select placeholder="Select country">
        <option>Vietname</option>
        <option>Korean</option>
      </Select>
      <FormLabel>Amount</FormLabel>
      <NumberInput max={50} min={1}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button mt="2" colorScheme="linkedin">
        Linkedin
      </Button>
    </FormControl>
  );
};

export default Login;
