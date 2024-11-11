const City = () => {
  const { city } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/${city}`);
        const item = res.data;

        setItems(item);
      } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
      }
    };

    fetchData();
  }, []);

  const LIMIT = 39;

  function fetchItems({ pageParam }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: items.slice(pageParam, pageParam + LIMIT),
          currentPage: pageParam,
          nextPage: pageParam + LIMIT < items.length ? pageParam + LIMIT : null,
        });
      }, 1000);
    });
  }
  const { data, error, status, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["items"],
      queryFn: fetchItems,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <section className="content">
      <Banner
        value={`banner`}
        title={`Food Delivery from ${city}'s Best Restaurants`}
      />

      {status === "pending" ? (
        <div>Loading...</div>
      ) : status === "error" ? (
        <div>{error.message}</div>
      ) : (
        <>
          <Allrestaurants data={data} />
          <div ref={ref}>{isFetchingNextPage && "Loading..."}</div>
        </>
      )}

      <ExtraDetail
        title={paragraphs.dineEasy[0]}
        paragraph={paragraphs.dineEasy[1]}
      />
      <ExtraDetail
        title={paragraphs.fastFood[0]}
        paragraph={paragraphs.fastFood[1]}
      />
      <ExtraDetail
        title={paragraphs.orderFood[0]}
        paragraph={paragraphs.orderFood[1]}
      />
      <AppDownload />
    </section>
  );
};
