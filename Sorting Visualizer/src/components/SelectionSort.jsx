export const selectionSort = async (array, setArray, setHighlighted, pause) => {
    let arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
  
      // Highlighting the current element and the min element
      setHighlighted([i, minIndex]);
      await pause(50); 
  
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
          setHighlighted([i, minIndex]); 
          await pause(200); 
        }
      }
  
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap the elements
        setArray([...arr]); 
        setHighlighted([]);
      }
    }
  };
  