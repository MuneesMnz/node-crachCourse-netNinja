const data = [
    { name: "ali" },
    { name: "athul" },
    { name: "ali" },
  ];
  
  const uniqueData = Array.from(new Set(data.map((item) => item.name))).map(
    (name) => {
      return data.find((item) => item.name === name);
    }
  );
  
  console.log(uniqueData);