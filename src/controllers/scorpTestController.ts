import db from "../models";
import { Request, Response } from "express";
import { Op } from "sequelize";

export const createBrand = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { brandLogo } = req.body;
  let { brandName } = req.body;
  brandName = brandName.toLowerCase();
  try {
    const brandExists = await db.Brand.findOne({ where: { brandName } });
    if (brandExists) {
      res.status(422).json({ error: "Brand already exists" });
      return;
    }
    const brand = await db.Brand.create({
      brandName,
      brandLogo,
    });
    res.status(201).json({ msg: "Brand registered successfully", data: brand });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Request could not be completed" });
  }
};
