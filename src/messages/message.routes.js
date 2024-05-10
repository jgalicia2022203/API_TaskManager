import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";
import { createMessage } from "./message.controller.js";

const router = Router();

router.post(
  "/",
  [
    check("name", "you don't have name?").not().isEmpty(),
    check("message", "you need to say something fella").not().isEmpty(),
    validateFields,
  ],
  createMessage
);

export default router;
