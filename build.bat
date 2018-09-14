for /D %%G IN (*) DO (
 cd %%G
 echo now in %%G
 start npm install
 cd..
)