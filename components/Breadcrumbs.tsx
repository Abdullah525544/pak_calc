 i m p o r t   R e a c t   f r o m   ' r e a c t ' ;  
 i m p o r t   {   L i n k ,   u s e L o c a t i o n   }   f r o m   ' r e a c t - r o u t e r - d o m ' ;  
 i m p o r t   {   H e l m e t   }   f r o m   ' r e a c t - h e l m e t - a s y n c ' ;  
 i m p o r t   {   C A L C U L A T O R S   }   f r o m   ' . . / c o n s t a n t s ' ;  
  
 e x p o r t   c o n s t   B r e a d c r u m b s   =   ( )   = >   {  
         c o n s t   l o c a t i o n   =   u s e L o c a t i o n ( ) ;  
         c o n s t   p a t h   =   l o c a t i o n . p a t h n a m e ;  
  
         i f   ( p a t h   = = =   ' / ' )   r e t u r n   n u l l ;  
  
         c o n s t   t o o l I d   =   p a t h . r e p l a c e ( ' / ' ,   ' ' ) ;  
         c o n s t   t o o l   =   C A L C U L A T O R S . f i n d ( c   = >   c . i d   = = =   t o o l I d ) ;  
  
         / /   B r e a d c r u m b   S c h e m a  
         c o n s t   s c h e m a   =   {  
                 " @ c o n t e x t " :   " h t t p s : / / s c h e m a . o r g " ,  
                 " @ t y p e " :   " B r e a d c r u m b L i s t " ,  
                 " i t e m L i s t E l e m e n t " :   [  
                         {  
                                 " @ t y p e " :   " L i s t I t e m " ,  
                                 " p o s i t i o n " :   1 ,  
                                 " n a m e " :   " H o m e " ,  
                                 " i t e m " :   " h t t p s : / / p a k c a l c . s i t e / "  
                         } ,  
                         {  
                                 " @ t y p e " :   " L i s t I t e m " ,  
                                 " p o s i t i o n " :   2 ,  
                                 " n a m e " :   t o o l — . c a t e g o r y   | |   " T o o l s " ,  
                                 " i t e m " :   " h t t p s : / / p a k c a l c . s i t e / a l l - t o o l s "  
                         } ,  
                         {  
                                 " @ t y p e " :   " L i s t I t e m " ,  
                                 " p o s i t i o n " :   3 ,  
                                 " n a m e " :   t o o l — . n a m e   | |   " C u r r e n t   P a g e " ,  
                                 " i t e m " :   ` h t t p s : / / p a k c a l c . s i t e $ { p a t h } `  
                         }  
                 ]  
         } ;  
  
         r e t u r n   (  
                 < >  
                         < H e l m e t >  
                                 < s c r i p t   t y p e = " a p p l i c a t i o n / l d + j s o n " > { J S O N . s t r i n g i f y ( s c h e m a ) } < / s c r i p t >  
                         < / H e l m e t >  
                         < n a v   c l a s s N a m e = " f l e x   t e x t - s m   t e x t - s l a t e - 5 0 0   m b - 6 "   a r i a - l a b e l = " B r e a d c r u m b " >  
                                 < o l   c l a s s N a m e = " i n l i n e - f l e x   i t e m s - c e n t e r   s p a c e - x - 1   m d : s p a c e - x - 3 " >  
                                         < l i   c l a s s N a m e = " i n l i n e - f l e x   i t e m s - c e n t e r " >  
                                                 < L i n k   t o = " / "   c l a s s N a m e = " h o v e r : t e x t - e m e r a l d - 6 0 0   t r a n s i t i o n - c o l o r s " >  
                                                         H o m e  
                                                 < / L i n k >  
                                         < / l i >  
                                         < l i >  
                                                 < d i v   c l a s s N a m e = " f l e x   i t e m s - c e n t e r " >  
                                                         < s p a n   c l a s s N a m e = " m x - 2   t e x t - s l a t e - 4 0 0 " > / < / s p a n >  
                                                         < L i n k   t o = " / a l l - t o o l s "   c l a s s N a m e = " h o v e r : t e x t - e m e r a l d - 6 0 0   t r a n s i t i o n - c o l o r s " >  
                                                                 { t o o l — . c a t e g o r y   | |   " T o o l s " }  
                                                         < / L i n k >  
                                                 < / d i v >  
                                         < / l i >  
                                         < l i   a r i a - c u r r e n t = " p a g e " >  
                                                 < d i v   c l a s s N a m e = " f l e x   i t e m s - c e n t e r " >  
                                                         < s p a n   c l a s s N a m e = " m x - 2   t e x t - s l a t e - 4 0 0 " > / < / s p a n >  
                                                         < s p a n   c l a s s N a m e = " t e x t - s l a t e - 9 0 0   f o n t - m e d i u m   t r u n c a t e   m a x - w - [ 2 0 0 p x ]   m d : m a x - w - n o n e " >  
                                                                 { t o o l — . n a m e   | |   " C u r r e n t   P a g e " }  
                                                         < / s p a n >  
                                                 < / d i v >  
                                         < / l i >  
                                 < / o l >  
                         < / n a v >  
                 < / >  
         ) ;  
 } ;  
 