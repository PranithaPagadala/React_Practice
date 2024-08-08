
        // const heading = React.createElement(
        //     "h1", 
        //     { id: 'heading' },
        //     "hello world using react"
        // );
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);
        // _______________________________________
        // HTML STRUCTURE //
        // <div id="parent">
        // <div id="child">
        //     <h1>iam h1 tag</h1>
        //     <h2>iam h2 tag</h2>
        // </div>
        // </div>
        // const parent = React.createElement(
        //     'div',
        //     { id : 'parent'} ,
        //     React.createElement('div', {id : 'child'} ,[
        //     React.createElement('h1', {} ,'iam h1 tag' ) ,
        //     React.createElement('h2', {} ,'iam h2 tag' ) ]
        //     )
        //  );
        //  console.log(parent);
        //  const root = ReactDOM.createRoot(document.getElementById("root"));
        //  root.render(parent);
          // _______________________________________
        // HTML STRUCTURE //
        // <div id="parent">
        // <div id="child">
        //     <h1>iam h1 tag</h1>
        //     <h2>iam h2 tag</h2>
        // </div>
        // <div id="child2">
        //      <h1>iam h1 tag</h1>
        //      <h2>iam h2 tag</h2>
        //  </div>
        // </div>
        const parent = React.createElement(
            'div',
            { id:'parent'},
            [ React.createElement ('div',{ id:'child 1'} , [
                React.createElement ('h1',{ id:'child'} , 'iam h1') ,
                React.createElement ('h2',{ id:'child'} , 'iam h2') ,
            ] ) ,
             React.createElement ('div',{ id:'child 2'} , [
                React.createElement ('h1',{ id:'child'} , 'iam h1') ,
                React.createElement ('h2',{ id:'child2'} , 'iam h2') ,
            ] ) ,
        ] );
        console.log(parent);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);