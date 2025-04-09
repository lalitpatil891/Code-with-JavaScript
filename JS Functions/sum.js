//function with rest operator
const sum = function(...n) {
				let tot=0;
				n.forEach(
							(e)=>{
								if(typeof e==='number')
								tot+=e;
							}
						  );
				return tot;
			}					 