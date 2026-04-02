 i m p o r t   R e a c t   f r o m   ' r e a c t ' ;  
 i m p o r t   R e a c t D O M   f r o m   ' r e a c t - d o m / c l i e n t ' ;  
 i m p o r t   {   B r o w s e r R o u t e r   }   f r o m   ' r e a c t - r o u t e r - d o m ' ;  
 i m p o r t   {   H e l m e t P r o v i d e r   }   f r o m   ' r e a c t - h e l m e t - a s y n c ' ;  
 i m p o r t   A p p   f r o m   ' . / A p p ' ;  
  
 c o n s t   r o o t E l e m e n t   =   d o c u m e n t . g e t E l e m e n t B y I d ( ' r o o t ' ) ;  
 i f   ( ! r o o t E l e m e n t )   {  
     t h r o w   n e w   E r r o r ( " C o u l d   n o t   f i n d   r o o t   e l e m e n t   t o   m o u n t   t o " ) ;  
 }  
  
 c o n s t   r o o t   =   R e a c t D O M . c r e a t e R o o t ( r o o t E l e m e n t ) ;  
 r o o t . r e n d e r (  
     < R e a c t . S t r i c t M o d e >  
         < H e l m e t P r o v i d e r >  
             < B r o w s e r R o u t e r >  
                 < A p p   / >  
             < / B r o w s e r R o u t e r >  
         < / H e l m e t P r o v i d e r >  
     < / R e a c t . S t r i c t M o d e >  
 ) ;  
 