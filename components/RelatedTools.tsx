 i m p o r t   R e a c t   f r o m   ' r e a c t ' ;  
 i m p o r t   {   L i n k   }   f r o m   ' r e a c t - r o u t e r - d o m ' ;  
  
 i n t e r f a c e   T o o l   {  
         i d :   s t r i n g ;  
         n a m e :   s t r i n g ;  
         i c o n :   s t r i n g ;  
 }  
  
 c o n s t   T O O L S :   R e c o r d < s t r i n g ,   T o o l >   =   {  
         ' i n c o m e - t a x ' :   {   i d :   ' i n c o m e - t a x ' ,   n a m e :   ' I n c o m e   T a x ' ,   i c o n :   ' 💰 '   } ,  
         ' z a k a t ' :   {   i d :   ' z a k a t ' ,   n a m e :   ' Z a k a t   C a l c u l a t o r ' ,   i c o n :   ' 🌙 '   } ,  
         ' l o a n - e m i ' :   {   i d :   ' l o a n - e m i ' ,   n a m e :   ' L o a n   E M I ' ,   i c o n :   ' 🏦 '   } ,  
         ' p r o f i t - m a r g i n ' :   {   i d :   ' p r o f i t - m a r g i n ' ,   n a m e :   ' P r o f i t   M a r g i n ' ,   i c o n :   ' 📊 '   } ,  
         ' b m i ' :   {   i d :   ' b m i ' ,   n a m e :   ' B M I   C a l c u l a t o r ' ,   i c o n :   ' 🏃 ‍ ♂ ️ '   } ,  
         ' i n v e s t m e n t - r e t u r n ' :   {   i d :   ' i n v e s t m e n t - r e t u r n ' ,   n a m e :   ' I n v e s t m e n t   R e t u r n ' ,   i c o n :   ' 📈 '   } ,  
         ' r e t i r e m e n t - p l a n ' :   {   i d :   ' r e t i r e m e n t - p l a n ' ,   n a m e :   ' R e t i r e m e n t   P l a n ' ,   i c o n :   ' 👴 '   } ,  
         ' r e a l - e s t a t e - r o i ' :   {   i d :   ' r e a l - e s t a t e - r o i ' ,   n a m e :   ' R e a l   E s t a t e   R O I ' ,   i c o n :   ' 🏡 '   } ,  
         ' p r o v i d e n t - f u n d ' :   {   i d :   ' p r o v i d e n t - f u n d ' ,   n a m e :   ' P r o v i d e n t   F u n d ' ,   i c o n :   ' 🛡 ️ '   } ,  
         ' g r a t u i t y ' :   {   i d :   ' g r a t u i t y ' ,   n a m e :   ' G r a t u i t y ' ,   i c o n :   ' 🎁 '   } ,  
         ' f r e e l a n c e r - t a x ' :   {   i d :   ' f r e e l a n c e r - t a x ' ,   n a m e :   ' F r e e l a n c e r   T a x ' ,   i c o n :   ' 💻 '   } ,  
         ' u n i t - c o n v e r t e r ' :   {   i d :   ' u n i t - c o n v e r t e r ' ,   n a m e :   ' U n i t   C o n v e r t e r ' ,   i c o n :   ' 🔄 '   } ,  
 } ;  
  
 i n t e r f a c e   R e l a t e d T o o l s P r o p s   {  
         t o o l I d s :   s t r i n g [ ] ;  
 }  
  
 e x p o r t   c o n s t   R e l a t e d T o o l s :   R e a c t . F C < R e l a t e d T o o l s P r o p s >   =   ( {   t o o l I d s   } )   = >   {  
         r e t u r n   (  
                 < d i v   c l a s s N a m e = " m t - 1 6   b o r d e r - t   b o r d e r - s l a t e - 1 0 0   p t - 1 2 " >  
                         < h 3   c l a s s N a m e = " t e x t - 2 x l   f o n t - b o l d   t e x t - s l a t e - 9 0 0   m b - 8   t e x t - c e n t e r " > E x p l o r e   M o r e   T o o l s < / h 3 >  
                         < d i v   c l a s s N a m e = " g r i d   g r i d - c o l s - 1   s m : g r i d - c o l s - 2   m d : g r i d - c o l s - 4   g a p - 6 " >  
                                 { t o o l I d s . m a p ( i d   = >   {  
                                         c o n s t   t o o l   =   T O O L S [ i d ] ;  
                                         i f   ( ! t o o l )   r e t u r n   n u l l ;  
                                         r e t u r n   (  
                                                 < L i n k  
                                                         k e y = { i d }  
                                                         t o = { ` / $ { i d } ` }  
                                                         c l a s s N a m e = " b g - w h i t e   p - 6   r o u n d e d - [ 2 r e m ]   b o r d e r   b o r d e r - s l a t e - 1 0 0   s h a d o w - s m   h o v e r : s h a d o w - x l   h o v e r : - t r a n s l a t e - y - 1   t r a n s i t i o n - a l l   f l e x   f l e x - c o l   i t e m s - c e n t e r   t e x t - c e n t e r   g r o u p "  
                                                 >  
                                                         < s p a n   c l a s s N a m e = " t e x t - 4 x l   m b - 3   g r o u p - h o v e r : s c a l e - 1 1 0   t r a n s i t i o n - t r a n s f o r m " > { t o o l . i c o n } < / s p a n >  
                                                         < h 4   c l a s s N a m e = " f o n t - b o l d   t e x t - s l a t e - 9 0 0   g r o u p - h o v e r : t e x t - e m e r a l d - 6 0 0   t r a n s i t i o n - c o l o r s " > { t o o l . n a m e } < / h 4 >  
                                                 < / L i n k >  
                                         ) ;  
                                 } ) }  
                         < / d i v >  
                 < / d i v >  
         ) ;  
 } ;  
 