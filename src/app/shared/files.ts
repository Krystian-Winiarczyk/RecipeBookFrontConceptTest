export const fileUpload = (files) => {
  const filesArray = [];
  if (files) {
    for (let file of files) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        filesArray.push({
          name: file.name,
          size: file.size,
          lastMod: file.lastModified,
          imageBase: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  }
  return filesArray;
};
