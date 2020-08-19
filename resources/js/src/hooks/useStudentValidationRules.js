import * as yup from "yup"

export default function useStudentValidationRules() {
  return {
    create: {
      name: yup.string().required("School name is required"),
      email: yup
        .string()
        .email("Invaild email check the order")
        .required("Email is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be atleast 8 characters"),
      conFirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password doesn't match"),
      address: yup.string().required("School address is required"),
      picture: yup
        .mixed()
        .test(
          "pictureType",
          "File type not supported",
          (value) =>
            (value[0] && value[0].type === "image/jpeg") ||
            "image/jpg" ||
            "image/png" ||
            "image/png"
        )
      // .test('pictureSize', 'The file is too large',
      //   value => value && value[0].size <= 2000000)
    },

    edit: {
      name: yup.string().required("School name is required"),
      email: yup
        .string()
        .email("Invaild email check the order")
        .required("Email is required"),
      password: yup
        .string()
        .default(null)
        .nullable()
        .test("minLength", "Password must be atleast 8 characters", (value) => {
          if (value.length === 0 || value.length >= 8) {
            return true
          }
          return false
        }),
      conFirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password doesn't match"),
      address: yup.string().required("School address is required"),
      picture: yup
        .mixed()
        .test(
          "pictureType",
          "File type not supported",
          (value) =>
            (value[0] && value[0].type === "image/jpeg") ||
            "image/jpg" ||
            "image/png" ||
            "image/png"
        )
      // .test('pictureSize', 'The file is too large',
      //   value => value && value[0].size <= 2000000)
    }
  }
}
