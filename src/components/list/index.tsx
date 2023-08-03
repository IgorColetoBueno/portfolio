import { PropsWithChildren } from "react";

interface ListProps {}

const List = ({ children }: PropsWithChildren<ListProps>) => {
  return <ul className="space-y-5 w-2/12">{children}</ul>;
};

List.Item = ({ children }: PropsWithChildren) => {
  return (
    <li className="text-white px-5 py-3 border border-gray-300 ease-in hover:bg-purple-500 hover:border-purple-500 text-lg cursor-pointer">
      {children}
    </li>
  );
};

// @ts-ignore
List.Item.displayName = "ListItem";

export default List;
