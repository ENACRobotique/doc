#/bin/bash
bi=$(which mdbook)
if [ -z $(which mdbook) ]
then
  cargo install mdbook
fi
