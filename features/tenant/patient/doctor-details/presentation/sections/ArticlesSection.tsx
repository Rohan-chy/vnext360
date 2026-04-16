const ArticlesSection = ({ doctor }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {doctor.articles?.map((article: any, i: number) => (
        <div
          key={i}
          className="border border-gray-200 p-2 rounded-lg text-sm text-gray-800 hover:shadow-sm transition"
        >
          <p className="font-semibold text-[#0D6641]">{article.title}</p>
          <p className="text-xs text-gray-600">{article.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticlesSection;
