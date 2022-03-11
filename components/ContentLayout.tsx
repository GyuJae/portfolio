interface IContentLayout {
  children: React.ReactNode;
}
const ContentLayout: React.FC<IContentLayout> = ({ children }) => {
  return <div className="w-[750px] mx-auto py-20 space-y-14">{children}</div>;
};

export default ContentLayout;
