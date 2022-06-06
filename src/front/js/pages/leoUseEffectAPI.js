

  useEffect(() => {
    const fn = async () => {
      const apiDinner = await getDinner();
     return setDinner(apiDinner); 
    };
    fn();
  }, [test]);

  useEffect(() => {
    const fn = async () => {
      const apiFridate = await getFridate();
     return setFridate(apiFridate); 
    };
    fn();
  }, [test]);
  

  useEffect(() => {
      const fn = async () => {
        const apiDessert = await getDessert();
       return setDessert(apiDessert); 
      };
      fn();
    }, [test]);