  
 i m p o r t   R e a c t   f r o m   ' r e a c t ' ;  
 i m p o r t   {   C a t e g o r y ,   C a l c u l a t o r   }   f r o m   ' . / t y p e s ' ;  
  
 e x p o r t   c o n s t   C A L C U L A T O R S :   C a l c u l a t o r [ ]   =   [  
     {  
         i d :   ' i n c o m e - t a x ' ,  
         n a m e :   ' I n c o m e   T a x   C a l c u l a t o r ' ,  
         n a m e U r d u :   ' ا ن ک م   ٹ ی ک س   ک ی ل ک و ل ی ٹ ر ' ,  
         d e s c r i p t i o n :   ' C a l c u l a t e   F B R   t a x   f o r   2 0 2 5 - 2 0 2 6   b a s e d   o n   l a t e s t   s l a b s . ' ,  
         c a t e g o r y :   C a t e g o r y . P A K _ S P E C I F I C ,  
         i c o n :   ' 📈 '  
     } ,  
     {  
         i d :   ' z a k a t ' ,  
         n a m e :   ' Z a k a t   C a l c u l a t o r   P a k i s t a n   ( U p d a t e d   N i s a b   R a t e s   2 0 2 5 - 2 6 ) ' ,  
         n a m e U r d u :   ' ز ک و ٰ ۃ   ک ی ل ک و ل ی ٹ ر ' ,  
         d e s c r i p t i o n :   ' C a l c u l a t e   y o u r   Z a k a t   o b l i g a t i o n   b a s e d   o n   I s l a m i c   p r i n c i p l e s . ' ,  
         c a t e g o r y :   C a t e g o r y . P A K _ S P E C I F I C ,  
         i c o n :   ' 🕌 '  
     } ,  
     {  
         i d :   ' f r e e l a n c e r - t a x ' ,  
         n a m e :   ' F r e e l a n c e r   I n c o m e ' ,  
         n a m e U r d u :   ' ف ر ی   ل ا ن س ر   ا ن ک م ' ,  
         d e s c r i p t i o n :   ' C a l c u l a t e   n e t   i n c o m e   a f t e r   b a n k   c h a r g e s   a n d   F B R   e x p o r t   t a x . ' ,  
         c a t e g o r y :   C a t e g o r y . B U S I N E S S ,  
         i c o n :   ' 💻 '  
     } ,  
     {  
         i d :   ' i n v e s t m e n t - r e t u r n ' ,  
         n a m e :   ' R O I   &   I n v e s t m e n t   R e t u r n   C a l c u l a t o r   ( P K R ) ' ,  
         n a m e U r d u :   ' س ر م ا ی ہ   ک ا ر ی   ک ا   م ن ا ف ع ' ,  
         d e s c r i p t i o n :   ' P r e d i c t   g r o w t h   o f   y o u r   s a v i n g s   w i t h   c o m p o u n d i n g   i n t e r e s t . ' ,  
         c a t e g o r y :   C a t e g o r y . F I N A N C I A L ,  
         i c o n :   ' 💰 '  
     } ,  
     {  
         i d :   ' r e t i r e m e n t - p l a n ' ,  
         n a m e :   ' R e t i r e m e n t   P l a n n e r ' ,  
         n a m e U r d u :   ' ر ی ٹ ا ئ ر م ن ٹ   ک ی   م ن ص و ب ہ   ب ن د ی ' ,  
         d e s c r i p t i o n :   ' C a l c u l a t e   h o w   m u c h   y o u   n e e d   t o   s a v e   f o r   a   c o m f o r t a b l e   r e t i r e m e n t . ' ,  
         c a t e g o r y :   C a t e g o r y . F I N A N C I A L ,  
         i c o n :   ' 🏖 ️ '  
     } ,  
     {  
         i d :   ' r e a l - e s t a t e - r o i ' ,  
         n a m e :   ' R e a l   E s t a t e   R O I ' ,  
         n a m e U r d u :   ' ر ی ئ ل   ا س ٹ ی ٹ   م ن ا ف ع ' ,  
         d e s c r i p t i o n :   ' C a l c u l a t e   p r o p e r t y   g a i n s ,   r e n t a l   y i e l d ,   a n d   F B R   t r a n s f e r   t a x e s . ' ,  
         c a t e g o r y :   C a t e g o r y . F I N A N C I A L ,  
         i c o n :   ' 🏠 '  
     } ,  
     {  
         i d :   ' p r o v i d e n t - f u n d ' ,  
         n a m e :   ' P r o v i d e n t   F u n d   ( P F ) ' ,  
         n a m e U r d u :   ' پ ر و و ی ڈ ن ٹ   ف ن ڈ ' ,  
         d e s c r i p t i o n :   ' E s t i m a t e   y o u r   P F   b a l a n c e   w i t h   e m p l o y e r   m a t c h i n g   a n d   i n t e r e s t . ' ,  
         c a t e g o r y :   C a t e g o r y . P A K _ S P E C I F I C ,  
         i c o n :   ' 🏦 '  
     } ,  
     {  
         i d :   ' g r a t u i t y ' ,  
         n a m e :   ' G r a t u i t y   C a l c u l a t o r   P a k i s t a n   ( A s   P e r   O f f i c i a l   L a b o r   L a w s   2 0 2 5 ) ' ,  
         n a m e U r d u :   ' گ ر ی ج و ی ٹ ی   ک ی ل ک و ل ی ٹ ر ' ,  
         d e s c r i p t i o n :   ' C a l c u l a t e   e n d - o f - s e r v i c e   b e n e f i t s   b a s e d   o n   P a k i s t a n   l a b o r   l a w s . ' ,  
         c a t e g o r y :   C a t e g o r y . P A K _ S P E C I F I C ,  
         i c o n :   ' 🎁 '  
     } ,  
     {  
         i d :   ' l o a n - e m i ' ,  
         n a m e :   ' L o a n   E M I   C a l c u l a t o r ' ,  
         n a m e U r d u :   ' ق ر ض   ک ی   ق س ط   ک ا   ک ی ل ک و ل ی ٹ ر ' ,  
         d e s c r i p t i o n :   ' C a l c u l a t e   m o n t h l y   i n s t a l l m e n t s   f o r   p e r s o n a l   o r   c a r   l o a n s . ' ,  
         c a t e g o r y :   C a t e g o r y . F I N A N C I A L ,  
         i c o n :   ' 🚗 '  
     } ,  
     {  
         i d :   ' p r o f i t - m a r g i n ' ,  
         n a m e :   ' P r o f i t   M a r g i n ' ,  
         n a m e U r d u :   ' م ن ا ف ع   ک ا   م ا ر ج ن ' ,  
         d e s c r i p t i o n :   ' F i n d   n e t   p r o f i t   a n d   m a r g i n   p e r c e n t a g e s   f o r   y o u r   b u s i n e s s . ' ,  
         c a t e g o r y :   C a t e g o r y . B U S I N E S S ,  
         i c o n :   ' 📊 '  
     } ,  
     {  
         i d :   ' u n i t - c o n v e r t e r ' ,  
         n a m e :   ' P a k i s t a n i   L a n d   M e a s u r e m e n t   &   U n i t   C o n v e r t e r   2 0 2 5 - 2 6 ' ,  
         n a m e U r d u :   ' ی و ن ٹ   ک ن و ر ٹ ر ' ,  
         d e s c r i p t i o n :   ' C o n v e r t   M a r l a   t o   S q F t ,   T o l a   t o   G r a m s ,   a n d   m o r e . ' ,  
         c a t e g o r y :   C a t e g o r y . E V E R Y D A Y ,  
         i c o n :   ' 📏 '  
     } ,  
     {  
         i d :   ' b m i ' ,  
         n a m e :   ' B M I   C a l c u l a t o r ' ,  
         n a m e U r d u :   ' ب ی   ا ی م   آ ئ ی   ک ی ل ک و ل ی ٹ ر ' ,  
         d e s c r i p t i o n :   ' C h e c k   y o u r   B o d y   M a s s   I n d e x   f o r   h e a l t h   r e c o m m e n d a t i o n s . ' ,  
         c a t e g o r y :   C a t e g o r y . E V E R Y D A Y ,  
         i c o n :   ' ⚖ ️ '  
     } ,  
     {  
         i d :   ' c g p a - c a l c ' ,  
         n a m e :   ' C G P A   C a l c u l a t o r ' ,  
         n a m e U r d u :   ' س ی   ج ی   پ ی   ا ے   ک ی ل ک و ل ی ٹ ر ' ,  
         d e s c r i p t i o n :   ' C a l c u l a t e   y o u r   S e m e s t e r   a n d   C u m u l a t i v e   G P A   e a s i l y . ' ,  
         c a t e g o r y :   C a t e g o r y . E D U C A T I O N ,  
         i c o n :   ' 🎓 '  
     } ,  
     {  
         i d :   ' g r a d e - c a l c ' ,  
         n a m e :   ' G r a d e   C a l c u l a t o r ' ,  
         n a m e U r d u :   ' گ ر ی ڈ   ک ی ل ک و ل ی ٹ ر ' ,  
         d e s c r i p t i o n :   ' C a l c u l a t e   y o u r   a c a d e m i c   g r a d e   b a s e d   o n   m a r k s   o b t a i n e d . ' ,  
         c a t e g o r y :   C a t e g o r y . E D U C A T I O N ,  
         i c o n :   ' 📝 '  
     } ,  
     {  
         i d :   ' m a r k - p e r c e n t a g e ' ,  
         n a m e :   ' S t u d e n t   M a r k s   P e r c e n t a g e   C a l c u l a t o r   ( S S C ,   H S S C   &   U n i ) ' ,  
         n a m e U r d u :   ' م ا ر ک س   ف ی ص د   ک ی ل ک و ل ی ٹ ر ' ,  
         d e s c r i p t i o n :   ' C o n v e r t   y o u r   m a r k s   i n t o   p e r c e n t a g e   i n s t a n t l y . ' ,  
         c a t e g o r y :   C a t e g o r y . E D U C A T I O N ,  
         i c o n :   ' 🎯 '  
     } ,  
     {  
         i d :   ' e l e c t r i c i t y - b i l l ' ,  
         n a m e :   ' E l e c t r i c i t y   B i l l   C a l c u l a t o r ' ,  
         n a m e U r d u :   ' ب ج ل ی   ک ا   ب ل   ک ی ل ک و ل ی ٹ ر ' ,  
         d e s c r i p t i o n :   ' C a l c u l a t e   y o u r   L E S C O ,   M E P C O ,   I E S C O   e l e c t r i c i t y   b i l l   w i t h   l a t e s t   N E P R A   t a r i f f s . ' ,  
         c a t e g o r y :   C a t e g o r y . P A K _ S P E C I F I C ,  
         i c o n :   ' ⚡ '  
     }  
 ] ;  
  
 e x p o r t   c o n s t   S A L A R I E D _ T A X _ S L A B S   =   [  
     {   t h r e s h o l d :   6 0 0 0 0 0 ,   r a t e :   0 ,   f i x e d :   0   } ,  
     {   t h r e s h o l d :   1 2 0 0 0 0 0 ,   r a t e :   5 ,   f i x e d :   0   } ,  
     {   t h r e s h o l d :   2 2 0 0 0 0 0 ,   r a t e :   1 5 ,   f i x e d :   3 0 0 0 0   } ,  
     {   t h r e s h o l d :   3 2 0 0 0 0 0 ,   r a t e :   2 5 ,   f i x e d :   1 8 0 0 0 0   } ,  
     {   t h r e s h o l d :   4 1 0 0 0 0 0 ,   r a t e :   3 0 ,   f i x e d :   4 3 0 0 0 0   } ,  
     {   t h r e s h o l d :   I n f i n i t y ,   r a t e :   3 5 ,   f i x e d :   7 0 0 0 0 0   }  
 ] ;  
  
 e x p o r t   c o n s t   N I S A B _ G O L D _ G R A M S   =   8 7 . 4 8 ;  
 e x p o r t   c o n s t   N I S A B _ S I L V E R _ G R A M S   =   6 1 2 . 3 6 ;  
 