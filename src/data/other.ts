export const navbarValues = [
  { name: "صفحه اصلی", url: "/" },
  { name: "بلاگ", url: "/blogs" },
  { name: "پژوهش ها", url: "/researches" },
];

export const uniqueIdGenerator = () => {
  let counter = 0;
  return `id-${counter++}`;
};
