export const DATA: book_Dea[] = [
  {
    title: "the minions1",
    imgSrc:
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioXNkNy7bd.A/v1/-1x-1.png",
    textMovie: "part 1",
  },
  {
    title: "the minions2",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxPCj6kYKp_Q5PPVssEWj4pgalKaiXIBOtQ&usqp=CAU",
    textMovie: "part 2",
  },
  {
    title: "the minions3",
    imgSrc: "https://flxt.tmsimg.com/assets/p11376954_v_h9_bj.jpg",
    textMovie: "part 3",
  },
];
export let count: number = 0;

export let counter: number = 0;
export function get_position() {}

export interface prop {
  title: string;
}
export interface book_Dea {
  title: string;
  imgSrc: string;
  textMovie: string;
}
