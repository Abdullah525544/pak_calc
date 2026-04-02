 i m p o r t   R e a c t   f r o m   ' r e a c t ' ;  
 i m p o r t   {   H e l m e t   }   f r o m   ' r e a c t - h e l m e t - a s y n c ' ;  
  
 i n t e r f a c e   S E O H e a d P r o p s   {  
         t i t l e :   s t r i n g ;  
         d e s c r i p t i o n :   s t r i n g ;  
         c a n o n i c a l U r l — :   s t r i n g ;  
 }  
  
 c o n s t   S E O H e a d :   R e a c t . F C < S E O H e a d P r o p s >   =   ( {   t i t l e ,   d e s c r i p t i o n ,   c a n o n i c a l U r l   } )   = >   {  
         c o n s t   s i t e U r l   =   ' h t t p s : / / p a k c a l c . s i t e ' ;  
         c o n s t   f u l l C a n o n i c a l U r l   =   c a n o n i c a l U r l   —   ` $ { s i t e U r l } $ { c a n o n i c a l U r l } `   :   s i t e U r l ;  
         c o n s t   o g I m a g e   =   ` $ { s i t e U r l } / o g - i m a g e . p n g ` ;  
  
         r e t u r n   (  
                 < H e l m e t >  
                         < t i t l e > { t i t l e } < / t i t l e >  
                         < m e t a   n a m e = " d e s c r i p t i o n "   c o n t e n t = { d e s c r i p t i o n }   / >  
                         < l i n k   r e l = " c a n o n i c a l "   h r e f = { f u l l C a n o n i c a l U r l }   / >  
  
                         { / *   O p e n   G r a p h   * / }  
                         < m e t a   p r o p e r t y = " o g : t i t l e "   c o n t e n t = { t i t l e }   / >  
                         < m e t a   p r o p e r t y = " o g : d e s c r i p t i o n "   c o n t e n t = { d e s c r i p t i o n }   / >  
                         < m e t a   p r o p e r t y = " o g : u r l "   c o n t e n t = { f u l l C a n o n i c a l U r l }   / >  
                         < m e t a   p r o p e r t y = " o g : t y p e "   c o n t e n t = " w e b s i t e "   / >  
                         < m e t a   p r o p e r t y = " o g : i m a g e "   c o n t e n t = { o g I m a g e }   / >  
  
                         { / *   T w i t t e r   C a r d   * / }  
                         < m e t a   n a m e = " t w i t t e r : c a r d "   c o n t e n t = " s u m m a r y _ l a r g e _ i m a g e "   / >  
                         < m e t a   n a m e = " t w i t t e r : t i t l e "   c o n t e n t = { t i t l e }   / >  
                         < m e t a   n a m e = " t w i t t e r : d e s c r i p t i o n "   c o n t e n t = { d e s c r i p t i o n }   / >  
                         < m e t a   n a m e = " t w i t t e r : i m a g e "   c o n t e n t = { o g I m a g e }   / >  
                 < / H e l m e t >  
         ) ;  
 } ;  
  
  
 e x p o r t   d e f a u l t   S E O H e a d ;  
 