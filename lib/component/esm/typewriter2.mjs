import"./typingInterval.mjs";import{o as t}from"./writeEffect.mjs";import{t as e}from"./onAnimationEnd.mjs";const o=async({elements:o},n)=>{if(n.cascade)o.forEach((t=>t.currentNode.textContent=""));else{const{getLongestTextElement:t}=await import("./index2.mjs"),a=t(o);e(a,(()=>n.dispatch("done")))}for(const e of o)n.cascade?await t(e,n):t(e,n);n.cascade&&n.dispatch("done")};export{o as mode};
