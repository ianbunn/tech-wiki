# Docker Containers

[jvns.ca - How containers work: overlayfs](https://jvns.ca/blog/2019/11/18/how-containers-work--overlayfs/)

**How do Containers start?**

Every container started with an image starts out with the same blank slate, as if it made a copy of the image just for that container to use. For big container images, making a copy would be a waste of disk space and pretty slow. **Docker doesn't make copies, instead it uses an overlay filesystem**.

**How Overlays work?**

Overlay filesystems, aka "union filesystems" or "union mounts" let you mount a filesystem using 2 directories:

* A "lower" directory - read only
* A "upper" directory - read/write

When a process **reads** a file, the `overlayfs` filesystem driver looks in the upper dir, if not found, it looks in the lower dir.

When a process **writes** a file, the `overlayfs` filesystem driver only writes in the upper dir.

***Pending to review full article***

---