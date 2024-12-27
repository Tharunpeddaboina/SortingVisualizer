export const insertionSort = async (array, setArray, setHighlighted, pause) => {
    let arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
  
      // Highlighting the current element and the elements it compares with
      setHighlighted([i, j]);
      await pause(50); 
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        setArray([...arr]);
        setHighlighted([i, j]);
        await pause(200); 
      }
      arr[j + 1] = key;
      setArray([...arr]);
      setHighlighted([]);
    }
  };
  