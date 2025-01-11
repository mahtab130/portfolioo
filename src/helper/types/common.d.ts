interface ICustomSwiperComment {
  data: IUserComment[];
}

interface IContentComment extends Omit<IUserComment, "id" | "image"> {
  classNames: { prev: string; next: string };
}

type TStandardSize = "small" | "medium" | "large";
interface ICustomLabel {
  label: string;
  color?: string;
  required?: boolean;
  size?: TStandardSize;
}

interface ICustomTitle {
  title: { text?: string; color?: string }[];
  pretitle?: string;
  setting?: {
    color?: string;
    iconColor?: string;
  };
}
interface IServiceBox {
  icon: TAny;
  title: string;
  description: string;
}
interface IEducationBox {
  title: string;
  description: {
    title: string;
    subtitle: string;
    years: string[];
  }[];
}
interface IResearchBox {
  id: number;
  title: string;
  image: string;
  description: string;
  navigateString?: string;
}
interface IAwardBox {
  icon: TAny;
  title: string;
  iconColor?: string;
  description: string;
}

interface IEmptyLastCenterJustify {
  xs?: number;
  md?: number;
  even?: boolean;
  length: number;
}

interface IContentSection<TSx = TAny> {
  image: string | JSX.Element;
  content: JSX.Element;
  setting?: {
    sx?: TSx;
    reverse?: boolean;
    imageWidth?: string;
    vectorSrc?: string;
  };
}

interface IBlogCard {
  id: number;
  image: string;
  title: string;
  description: string;
  navigateString?: string;
}

interface ICommentField {}
