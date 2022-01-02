import db from "../models";
import {
  UserReturned,
  postFetchReturned,
} from "../types/questionsResponses.types";

// breaking this down to a single function in case we dcide to use it elsewhere
export async function get_user(user_id: string | number) {
  // we load the user details first
  const User = await db.User.findOne({ where: { id: user_id } });

  // we load the user's followers cound to ascertain the boolean of followed as this is not in the original user model
  const userFollowers = await db.Follow.findAll({
    where: { followed_id: user_id },
  });

  if (userFollowers.length < 1) {
    User.followed = false;
  } else {
    User.followed = true;
  }

  return User;
}

// answer to question 1
export async function get_posts(
  user_id: string,
  post_ids: [string] | [number]
): Promise<void> {
  try {
    const requestingUser: UserReturned = await get_user(user_id);

    // we loop through the post_ids and load the posts this enables us to retain the position even for the null post_ids
    let returnablePosts: postFetchReturned[] = [];
    for (let i = 0; i < post_ids.length; i++) {
      if (post_ids[i] === null) {
        returnablePosts[i] = null as any;
      } else {
        const post = await db.Post.findOne({ where: { id: post_ids[i] } });
        post.owner = requestingUser;
        returnablePosts[i] = post;
      }
    }

    return;
  } catch (err) {
    console.log(err);
  }
}
