 i m p o r t   {   u s e E f f e c t   }   f r o m   ' r e a c t ' ;  
 i m p o r t   {   u s e L o c a t i o n   }   f r o m   ' r e a c t - r o u t e r - d o m ' ;  
  
 c o n s t   S c r o l l T o T o p   =   ( )   = >   {  
         c o n s t   {   p a t h n a m e   }   =   u s e L o c a t i o n ( ) ;  
  
         u s e E f f e c t ( ( )   = >   {  
                 / /   D i s a b l e   b r o w s e r ' s   d e f a u l t   s c r o l l   r e s t o r a t i o n   t o   a v o i d   c o n f l i c t  
                 i f   ( ' s c r o l l R e s t o r a t i o n '   i n   w i n d o w . h i s t o r y )   {  
                         w i n d o w . h i s t o r y . s c r o l l R e s t o r a t i o n   =   ' m a n u a l ' ;  
                 }  
  
                 / /   A l w a y s   s c r o l l   t o   t o p   o n   r o u t e   c h a n g e  
                 w i n d o w . s c r o l l T o ( 0 ,   0 ) ;  
         } ,   [ p a t h n a m e ] ) ;  
  
         r e t u r n   n u l l ;  
 } ;  
  
 e x p o r t   d e f a u l t   S c r o l l T o T o p ;  
 