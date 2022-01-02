import { Request, Response } from "express";
import { get_posts, get_user } from "../services/scorpTest.services";
import { listOfPostSingle } from "../types/questionsResponses.types";

// this fetches both posts and user as question 1 demands
export const getPosts = async (req: Request, res: Response): Promise<void> => {
  const { userId, post_id } = req.body;
  try {
    const user = await get_user(userId);
    const posts = await get_posts(userId, post_id);
    res
      .status(201)
      .json({ msg: "User and Posts Returned: ", data: { user, posts } });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Request could not be completed" });
  }
};

// answer to question 2
export const mergePosts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { list_of_posts } = req.body;
  try {
    // first step is to flatten the list of list into a single list
    const flattened_list_of_posts: listOfPostSingle[] = [].concat.apply(
      [],
      list_of_posts
    );

    // remove all duplicates
    const unique_list_of_posts = [...new Set(flattened_list_of_posts)];

    // next we want to sort the by the created_at field
    unique_list_of_posts.sort(function (a, b) {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime() ||
        b.id - a.id
      );
    });

    res
      .status(201)
      .json({ msg: "Processed Lists: ", data: { unique_list_of_posts } });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Request could not be completed" });
  }
};
