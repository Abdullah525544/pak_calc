  
 e x p o r t   e n u m   C a t e g o r y   {  
     F I N A N C I A L   =   ' F i n a n c i a l   P l a n n i n g ' ,  
     P A K _ S P E C I F I C   =   ' P a k i s t a n   S p e c i f i c ' ,  
     B U S I N E S S   =   ' B u s i n e s s   C a l c u l a t o r s ' ,  
     E V E R Y D A Y   =   ' E v e r y d a y   T o o l s ' ,  
     E D U C A T I O N   =   ' E d u c a t i o n   T o o l s '  
 }  
  
 e x p o r t   i n t e r f a c e   C a l c u l a t o r   {  
     i d :   s t r i n g ;  
     n a m e :   s t r i n g ;  
     n a m e U r d u :   s t r i n g ;  
     d e s c r i p t i o n :   s t r i n g ;  
     c a t e g o r y :   C a t e g o r y ;  
     i c o n :   s t r i n g ;  
 }  
  
 e x p o r t   t y p e   V i e w   =   ' h o m e '   |   ' t o o l '   |   ' s l a b s '   |   ' z a k a t - i n f o '   |   ' c o n t a c t '   |   ' p r i v a c y '   |   ' t e r m s '   |   ' d i s c l a i m e r '   |   ' a l l - t o o l s ' ;  
  
 e x p o r t   i n t e r f a c e   T a x R e s u l t   {  
     t o t a l I n c o m e :   n u m b e r ;  
     t a x a b l e I n c o m e :   n u m b e r ;  
     t o t a l T a x :   n u m b e r ;  
     m o n t h l y T a x :   n u m b e r ;  
     n e t I n c o m e :   n u m b e r ;  
     e f f e c t i v e R a t e :   n u m b e r ;  
 }  
 