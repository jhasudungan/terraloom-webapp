
const extractPage = (searchParams: { [key: string]: string | string[] | undefined }):number => {

    const paramPage = searchParams.page;

    let page:number = 1;

    if (typeof paramPage === "string") {
        
        page = parseInt(paramPage);

        if (isNaN(page) || page <= 0 ) {
            page = 1;
        }

    }

    return page;
}

const extractQuery = (searchParams: { [key: string]: string | string[] | undefined }):string => {

    const paramQuery = searchParams.query;

    let query: string = "";

    if (typeof paramQuery === "string") {
      query = paramQuery;
    }

    return query;
}

const formatDate = (utcTimeString: string) => {
    
  const date = new Date(utcTimeString);

  // Convert to Jakarta timezone and format
  const jakartaTime = date.toLocaleString('en-CA', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  // Replace the default format to match your desired output
  const formatted = jakartaTime.replace(/(\d{4})-(\d{2})-(\d{2}),\s(\d{2}:\d{2}:\d{2})/, '$2/$3/$1 $4');

  return formatted;
};
export { extractPage,  
         extractQuery, 
         formatDate }