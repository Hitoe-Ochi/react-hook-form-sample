import React from "react";
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { DevTool } from "@hookform/devtools";

const defaultValues = {
  TextField: "",
  comment: "hi hitoe",
};

export default function App() {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    getValues,
    reset
  } = useForm({
    mode: "onChange",
    defaultValues,
  });

  return (
    <>
      <Box sx={{ margin: 2 }}>
        <Button
          variant="contained"
          onClick={() =>
            setValue("TextField", "User A", { shouldValidate: true })
          }
        >
          User A
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            setValue("TextField", "User B", { shouldValidate: true })
          }
        >
          User B
        </Button>
      </Box>
      <Box sx={{ padding: 2 }}>
        <form onSubmit={handleSubmit((data) => {
          console.log(data)
          // reset(defaultValues)
          })}>
          <Box sx={{ display: "flex", textAlign: "center", margin: 2 }}>
            <label>MUI TextField</label>
            <Controller
              render={({ field }) => (
                <TextField
                  onChange={(e) =>
                    setValue("TextField", e.target.value, {
                      shouldValidate: true,
                    })
                  }
                  error={Boolean(errors.TextField)}
                  helperText={errors.TextField && "error"}
                  {...field}
                />
              )}
              name="TextField"
              control={control}
              rules={{ required: true, maxLength: 10, minLength: 3 }}
            />
          </Box>

          <Box sx={{ display: "flex", textAlign: "center", margin: 2 }}>
            <label>MUI TextField 02</label>
            <Controller
              render={({ field }) => (
                <TextField
                  onChange={(e) =>
                    setValue("comment", e.target.value, {
                      shouldValidate: true,
                    })
                  }
                  error={Boolean(errors.comment)}
                  helperText={errors.comment && "error"}
                  {...field}
                />
              )}
              name="comment"
              control={control}
              rules={{ required: true, maxLength: 10, minLength: 3 }}
            />
          </Box>

          {/* <input type="submit" /> */}
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>

        <div>{getValues("TextField")}</div>

        <DevTool control={control} />
      </Box>
    </>
  );
}
